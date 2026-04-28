import {
  DataSearch,
  DateRange,
  SelectedFilters,
  SingleList,
  StateProvider,
  ToggleButton,
} from "@appbaseio/reactivesearch";
import { endOfDay, format, startOfDay } from "date-fns";
import { FC } from "react";

const REACTIVE_SEARCH_PROPS_REACT = Object.freeze({
  and: [
    "query",
    "isPartOf",
    "type",
    "organism",
    "datePublished",
    "objectType",
    "libraryStrategy",
    "librarySource",
    "librarySelection",
    "platform",
    "instrumentModel",
    "studyType",
    "experimentType",
    "submissionType",
  ],
});

// reactivesearch ToggleButton / SingleList の searchState.value は、
// click 時は data entry の value、URL hydrate 時は文字列の label と
// 来るパスによって異なる。比較側で吸収するため lowercase に正規化する。
// type (sra-experiment 等) や organism.name (Homo sapiens 等) は元々 fixed case なので
// lowercase 化しても比較ターゲットが lowercase 想定なら問題ない。
const readSelected = (entry: any): string | undefined => {
  const v = entry?.value;
  if (v == null) return undefined;
  let raw: unknown;
  if (Array.isArray(v)) {
    if (v.length !== 1) return undefined;
    raw = v[0];
  } else {
    raw = v;
  }
  if (typeof raw === "string") return raw;
  if (raw && typeof raw === "object") {
    const o = raw as { value?: unknown; label?: unknown };
    if (typeof o.value === "string") return o.value;
    if (typeof o.label === "string") return o.label;
  }
  return undefined;
};

// reactivesearch 3.40.1 の SingleList は URLParams から hydrate された
// value が配列形式 (["jga-study"] 等) のとき、内部生成 query が
// `{"term":{"<field>":["jga-study"]}}` となり ES が 400 を返す。
// customQuery で必ず単一値の term に変換する。
const singleListCustomQuery = (value: unknown, props: { dataField: string }) => {
  if (value == null) return undefined;
  const v = Array.isArray(value) ? value[0] : value;
  if (typeof v !== "string" || v === "") return undefined;
  return { query: { term: { [props.dataField]: v } } };
};

const dateRangeCustomQuery = (value: any, props: any) => {
  if (!value) return undefined;

  const range: any = {};
  range[props.dataField] = {};
  if (value?.start)
    range[props.dataField].gte = format(
      startOfDay(new Date(value.start)),
      "yyyy-MM-dd'T'HH:mm:ssxxx"
    );
  if (value?.end)
    range[props.dataField].lte = format(endOfDay(new Date(value.end)), "yyyy-MM-dd'T'HH:mm:ssxxx");

  const query = { bool: { must: [{ bool: { must: [{ range }] } }] } };
  return { query };
};

// text 型フィールド（analyzed）のみ。keyword 型は cross_fields に混ぜられないため別クエリにする
const SEARCH_TEXT_FIELDS = ["title^3", "name^2", "description^0.5"];

// SSOT:
//   - ID パターン: ddbj-search-converter/ddbj_search_converter/id_patterns.py
//   - 完全一致判定: ddbj-search-api/ddbj_search_api/search/accession.py
//   - status filter: ddbj-search-api/ddbj_search_api/es/query.py (build_status_filter)
//   - 仕様: ddbj-search-api/docs/api-spec.md § データ可視性 (status 制御)
// DbType (ddbj-search-api/ddbj_search_api/schemas/common.py) に列挙されているタイプのみ採用。
// geo / insdc-* / humandbs / pubmed / taxonomy は DbType 外なので除外。
export const ID_PATTERNS: ReadonlyArray<RegExp> = Object.freeze([
  /^SAM[NED](\w)?\d+$/, // biosample
  /^PRJ[DEN][A-Z]\d+$/, // bioproject
  /^[SDE]RA\d+$/, // sra-submission
  /^[SDE]RP\d+$/, // sra-study
  /^[SDE]RX\d+$/, // sra-experiment
  /^[SDE]RR\d+$/, // sra-run
  /^[SDE]RS\d+$/, // sra-sample
  /^[SDE]RZ\d+$/, // sra-analysis
  /^JGAS\d+$/, // jga-study
  /^JGAD\d+$/, // jga-dataset
  /^JGAC\d+$/, // jga-dac
  /^JGAP\d+$/, // jga-policy
  /^E-GEAD-\d+$/, // gea
  /^MTBKS\d+$/, // metabobank
]);

export const detectAccessionExactMatch = (
  raw: string | null | undefined,
): string | null => {
  if (raw == null) return null;
  if (raw.includes(",")) return null;

  let token = raw.trim();
  if (token === "") return null;

  if (
    token.length >= 2 &&
    token[0] === token[token.length - 1] &&
    (token[0] === '"' || token[0] === "'")
  ) {
    token = token.slice(1, -1).trim();
  }
  if (token === "") return null;

  if (token.includes("*") || token.includes("?")) return null;

  return ID_PATTERNS.some((p) => p.test(token)) ? token : null;
};

const PUBLIC_ONLY_FILTER = Object.freeze({
  term: { status: "public" },
});
const INCLUDE_SUPPRESSED_FILTER = Object.freeze({
  terms: { status: ["public", "suppressed"] },
});

export const queryCustomQuery = (value: unknown) => {
  const trimmed = (value == null ? "" : String(value)).trim();
  const exact = detectAccessionExactMatch(trimmed);
  const statusFilter = exact != null ? INCLUDE_SUPPRESSED_FILTER : PUBLIC_ONLY_FILTER;

  // 空キーワード時は status filter のみ返す。undefined を返すと
  // reactivesearch v3.40.1 の getQuery が空 entry を捨てて status filter が
  // ReactiveList の bool.must に乗らなくなる。
  if (trimmed === "") {
    return { query: { bool: { filter: [statusFilter] } } };
  }

  // accession 完全一致のとき should の検索語にも剥がし後の ID を使う。
  // クオート込み文字列を identifier に検索すると 0 hit になり、suppressed を
  // 許可しても結局期待エントリーが返らない。
  const queryString = exact != null ? exact : trimmed;

  return {
    query: {
      bool: {
        must: [
          {
            bool: {
              should: [
                // identifier: keyword 型 — 完全一致（最優先）
                { term: { identifier: { value: queryString, boost: 10 } } },
                // identifier: keyword 型 — 前方一致（accession の部分入力に対応）
                { prefix: { identifier: { value: queryString, boost: 5 } } },
                // organism.name.keyword: keyword 型 — 完全一致
                { term: { "organism.name.keyword": { value: queryString, boost: 2 } } },
                // title: フレーズ一致ボーナス（語順が一致すれば高スコア）
                { match_phrase: { title: { query: queryString, boost: 5 } } },
                // text フィールド横断検索（全キーワードがいずれかのフィールドに存在すれば一致）
                {
                  multi_match: {
                    query: queryString,
                    fields: SEARCH_TEXT_FIELDS,
                    type: "cross_fields",
                    operator: "and",
                  },
                },
                // text フィールド: フレーズ一致（語順一致ボーナス）
                {
                  multi_match: {
                    query: queryString,
                    fields: SEARCH_TEXT_FIELDS,
                    type: "phrase",
                  },
                },
                // text フィールド: 前方一致（入力途中の部分一致に対応）
                {
                  multi_match: {
                    query: queryString,
                    fields: SEARCH_TEXT_FIELDS,
                    type: "phrase_prefix",
                  },
                },
              ],
              minimum_should_match: 1,
            },
          },
        ],
        filter: [statusFilter],
      },
    },
  };
};

export const Conditions: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <DataSearch
        componentId="query"
        dataField={[
          "identifier",
          "title",
          "description",
          "name",
          "organism.name",
        ]}
        title={"Keyword"}
        filterLabel={"Keyword"}
        autosuggest={false}
        showFilter
        URLParams
        queryFormat="and"
        debounce={300}
        customQuery={queryCustomQuery}
        react={REACTIVE_SEARCH_PROPS_REACT}
      />
      <ToggleButton
        componentId="isPartOf"
        dataField="isPartOf"
        title={"Database"}
        filterLabel={"Database"}
        URLParams
        react={REACTIVE_SEARCH_PROPS_REACT}
        data={[
          { label: "BioSample", value: "biosample" },
          { label: "BioProject", value: "bioproject" },
          { label: "SRA", value: "sra" },
          { label: "JGA", value: "jga" },
          { label: "GEA", value: "gea" },
          { label: "MetaboBank", value: "metabobank" },
        ]}
      />
      <SingleList
        componentId="type"
        dataField="type"
        title={"Type"}
        filterLabel={"Type"}
        URLParams
        customQuery={singleListCustomQuery}
        react={REACTIVE_SEARCH_PROPS_REACT}
      />
      <StateProvider componentIds={["isPartOf"]}>
        {({ searchState }: { searchState: Record<string, any> }) => {
          const isPartOf = readSelected(searchState?.isPartOf)?.toLowerCase();
          return (
            <>
              {isPartOf === "bioproject" && (
                <SingleList
                  componentId="objectType"
                  dataField="objectType"
                  title={"Object Type"}
                  filterLabel={"Object Type"}
                  URLParams
                  customQuery={singleListCustomQuery}
                  react={REACTIVE_SEARCH_PROPS_REACT}
                />
              )}
              {isPartOf === "sra" && (
                <>
                  <SingleList
                    componentId="libraryStrategy"
                    dataField="libraryStrategy.keyword"
                    title={"Library Strategy"}
                    filterLabel={"Library Strategy"}
                    URLParams
                    customQuery={singleListCustomQuery}
                    react={REACTIVE_SEARCH_PROPS_REACT}
                  />
                  <SingleList
                    componentId="librarySource"
                    dataField="librarySource.keyword"
                    title={"Library Source"}
                    filterLabel={"Library Source"}
                    URLParams
                    customQuery={singleListCustomQuery}
                    react={REACTIVE_SEARCH_PROPS_REACT}
                  />
                  <SingleList
                    componentId="librarySelection"
                    dataField="librarySelection.keyword"
                    title={"Library Selection"}
                    filterLabel={"Library Selection"}
                    URLParams
                    customQuery={singleListCustomQuery}
                    react={REACTIVE_SEARCH_PROPS_REACT}
                  />
                  <SingleList
                    componentId="platform"
                    dataField="platform.keyword"
                    title={"Platform"}
                    filterLabel={"Platform"}
                    URLParams
                    customQuery={singleListCustomQuery}
                    react={REACTIVE_SEARCH_PROPS_REACT}
                  />
                  <SingleList
                    componentId="instrumentModel"
                    dataField="instrumentModel.keyword"
                    title={"Instrument Model"}
                    filterLabel={"Instrument Model"}
                    URLParams
                    customQuery={singleListCustomQuery}
                    react={REACTIVE_SEARCH_PROPS_REACT}
                  />
                </>
              )}
              {isPartOf === "jga" && (
                <SingleList
                  componentId="studyType"
                  dataField="studyType.keyword"
                  title={"Study Type"}
                  filterLabel={"Study Type"}
                  URLParams
                  customQuery={singleListCustomQuery}
                  react={REACTIVE_SEARCH_PROPS_REACT}
                />
              )}
              {isPartOf === "gea" && (
                <SingleList
                  componentId="experimentType"
                  dataField="experimentType.keyword"
                  title={"Experiment Type"}
                  filterLabel={"Experiment Type"}
                  URLParams
                  customQuery={singleListCustomQuery}
                  react={REACTIVE_SEARCH_PROPS_REACT}
                />
              )}
              {isPartOf === "metabobank" && (
                <>
                  <SingleList
                    componentId="studyType"
                    dataField="studyType.keyword"
                    title={"Study Type"}
                    filterLabel={"Study Type"}
                    URLParams
                    customQuery={singleListCustomQuery}
                    react={REACTIVE_SEARCH_PROPS_REACT}
                  />
                  <SingleList
                    componentId="experimentType"
                    dataField="experimentType.keyword"
                    title={"Experiment Type"}
                    filterLabel={"Experiment Type"}
                    URLParams
                    customQuery={singleListCustomQuery}
                    react={REACTIVE_SEARCH_PROPS_REACT}
                  />
                  <SingleList
                    componentId="submissionType"
                    dataField="submissionType.keyword"
                    title={"Submission Type"}
                    filterLabel={"Submission Type"}
                    URLParams
                    customQuery={singleListCustomQuery}
                    react={REACTIVE_SEARCH_PROPS_REACT}
                  />
                </>
              )}
            </>
          );
        }}
      </StateProvider>

      <SingleList
        componentId="organism"
        dataField="organism.name.keyword"
        title={"Organism"}
        filterLabel={"Organism"}
        URLParams
        customQuery={singleListCustomQuery}
        react={REACTIVE_SEARCH_PROPS_REACT}
      />
      <DateRange
        componentId="datePublished"
        dataField="datePublished"
        title={"Published Date"}
        filterLabel={"Published Date"}
        URLParams
        customQuery={dateRangeCustomQuery}
        react={REACTIVE_SEARCH_PROPS_REACT}
      />
      <SelectedFilters />
    </div>
  );
};
