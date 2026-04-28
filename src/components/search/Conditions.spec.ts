import { describe, expect, it } from "vitest";
import {
  detectAccessionExactMatch,
  ID_PATTERNS,
  queryCustomQuery,
} from "@/components/search/Conditions.tsx";

const PUBLIC_ONLY = { term: { status: "public" } };
const INCLUDE_SUPPRESSED = { terms: { status: ["public", "suppressed"] } };

describe("ID_PATTERNS", () => {
  it("DbType 14 種類分の正規表現が登録されている", () => {
    expect(ID_PATTERNS).toHaveLength(14);
  });

  it("配列は frozen", () => {
    expect(Object.isFrozen(ID_PATTERNS)).toBe(true);
  });
});

describe("detectAccessionExactMatch", () => {
  describe("各 DbType 代表値の完全一致", () => {
    it.each([
      ["PRJDB1234"],
      ["PRJEB12345"],
      ["PRJNA999"],
      ["SAMD00000001"],
      ["SAMN0123"],
      ["SAMEA12"],
      ["DRA001"],
      ["SRA001"],
      ["ERA001"],
      ["SRP001"],
      ["SRX001"],
      ["SRR001"],
      ["SRS001"],
      ["SRZ001"],
      ["JGAS000000000001"],
      ["JGAD001"],
      ["JGAC001"],
      ["JGAP001"],
      ["E-GEAD-001"],
      ["MTBKS001"],
    ])("%s -> 自身を返す", (input) => {
      expect(detectAccessionExactMatch(input)).toBe(input);
    });
  });

  describe("外側クオート剥がし", () => {
    it.each([
      ['"PRJDB5611"', "PRJDB5611"],
      ["'PRJDB5611'", "PRJDB5611"],
      ['  "PRJDB5611"  ', "PRJDB5611"],
      ['"  PRJDB5611  "', "PRJDB5611"],
    ])("%s -> %s", (input, expected) => {
      expect(detectAccessionExactMatch(input)).toBe(expected);
    });
  });

  describe("左右クオート不一致は剥がさない", () => {
    it.each([
      ['"PRJDB5611\''],
      ['PRJDB5611"'],
      ['\'PRJDB5611"'],
      ["'PRJDB5611"],
    ])("%s -> null", (input) => {
      expect(detectAccessionExactMatch(input)).toBeNull();
    });
  });

  it("二重クオートは一回だけ剥がす (内部クオート残りで ID マッチしない)", () => {
    expect(detectAccessionExactMatch('""PRJDB5611""')).toBeNull();
    expect(detectAccessionExactMatch("''PRJDB5611''")).toBeNull();
  });

  describe("ワイルドカード", () => {
    it.each([["PRJDB*"], ["PRJDB?234"], ["*"], ["?"], ['"PRJDB*"'], ["'PRJDB?'"]])(
      "%s -> null",
      (input) => {
        expect(detectAccessionExactMatch(input)).toBeNull();
      },
    );
  });

  describe("カンマ区切り", () => {
    it.each([
      ["PRJDB1234,PRJDB5678"],
      ["PRJDB1234, PRJDB5678"],
      [",PRJDB1234"],
      ["PRJDB1234,"],
      [","],
    ])("%s -> null", (input) => {
      expect(detectAccessionExactMatch(input)).toBeNull();
    });
  });

  describe("ID パターン非該当のフリーテキスト", () => {
    it.each([
      ["VRS3b"],
      ["cancer"],
      ["Homo sapiens"],
      ["PRJDB"],
      ["PRJDB12.3"],
      ["PRJDB-1234"],
      ["12345"],
      ["prjdb1234"], // case sensitive
      ["GSE12345"], // geo は DbType 外
      ["GCA_000001405.15"], // insdc-assembly は DbType 外
      ["hum0014"], // humandbs は DbType 外
    ])("%s -> null", (input) => {
      expect(detectAccessionExactMatch(input)).toBeNull();
    });
  });

  describe("空・null・undefined・空白", () => {
    it.each([[""], ["   "], ['""'], ["''"], ['"  "']])("%j -> null", (input) => {
      expect(detectAccessionExactMatch(input)).toBeNull();
    });

    it("null -> null", () => {
      expect(detectAccessionExactMatch(null)).toBeNull();
    });

    it("undefined -> null", () => {
      expect(detectAccessionExactMatch(undefined)).toBeNull();
    });
  });

  describe("改行混入", () => {
    it("末尾 \\n は trim で除去されて完全一致", () => {
      expect(detectAccessionExactMatch("PRJDB1234\n")).toBe("PRJDB1234");
    });

    it("中間 \\n を含むなら不一致", () => {
      expect(detectAccessionExactMatch("PRJDB\n1234")).toBeNull();
    });
  });

  describe("接頭辞・接尾辞付きはマッチしない (regex の ^ / $ 削除を検出)", () => {
    it.each([["xxxPRJDB1234"], ["PRJDB1234xxx"], ["xPRJDB1234x"]])(
      "%s -> null",
      (input) => {
        expect(detectAccessionExactMatch(input)).toBeNull();
      },
    );
  });
});

describe("queryCustomQuery", () => {
  describe("空キーワード時は status filter のみ (must なし)", () => {
    it.each([[undefined], [null], [""], ["   "], ["\t"], ["\n"]])(
      "value=%j -> bool.filter のみ public",
      (value) => {
        const result = queryCustomQuery(value);
        expect(result.query.bool.filter).toEqual([PUBLIC_ONLY]);
        expect((result.query.bool as Record<string, unknown>).must).toBeUndefined();
      },
    );
  });

  describe("フリーテキストは public のみで filter", () => {
    it.each([
      ["VRS3b"],
      ["cancer"],
      ["Homo sapiens"],
      ["PRJDB*"],
      ["PRJDB1234,PRJDB5678"],
      ["GSE12345"], // DbType 外なのでフリーテキスト扱い
    ])("value=%j -> bool.filter に public のみ + must の should 7 件", (value) => {
      const result = queryCustomQuery(value);
      expect(result.query.bool.filter).toEqual([PUBLIC_ONLY]);
      const must = result.query.bool.must as Array<{
        bool: { should: unknown[]; minimum_should_match: number };
      }>;
      expect(must).toHaveLength(1);
      expect(must[0].bool.should).toHaveLength(7);
      expect(must[0].bool.minimum_should_match).toBe(1);
    });
  });

  describe("accession 完全一致は [public, suppressed]", () => {
    it.each([
      ["PRJDB5611"],
      ['"PRJDB5611"'],
      ["'PRJDB5611'"],
      ["  PRJDB5611  "],
      ['"  PRJDB5611  "'],
      ["SAMD00000001"],
      ["E-GEAD-001"],
      ["MTBKS001"],
    ])("value=%j -> bool.filter に [public, suppressed]", (value) => {
      const result = queryCustomQuery(value);
      expect(result.query.bool.filter).toEqual([INCLUDE_SUPPRESSED]);
    });
  });

  describe("クオート剥がし後の ID が should ブロックに渡る", () => {
    it.each([
      ['"PRJDB5611"', "PRJDB5611"],
      ["'PRJDB5611'", "PRJDB5611"],
      ['"  PRJDB5611  "', "PRJDB5611"],
      ["PRJDB5611", "PRJDB5611"],
    ])("value=%j -> term.identifier.value=%s", (value, expectedQuery) => {
      const result = queryCustomQuery(value);
      const should = (result.query.bool.must as Array<{
        bool: { should: Array<Record<string, unknown>> };
      }>)[0].bool.should;
      const termIdentifier = should.find(
        (s) =>
          typeof s === "object" &&
          s !== null &&
          "term" in s &&
          (s.term as Record<string, unknown>).identifier !== undefined,
      ) as { term: { identifier: { value: string } } } | undefined;
      expect(termIdentifier?.term.identifier.value).toBe(expectedQuery);
    });
  });

  describe("カンマ区切り・ワイルドカードはフリーテキスト扱い (suppressed 混入なし)", () => {
    it("PRJDB1234,PRJDB5678 -> public のみ", () => {
      const result = queryCustomQuery("PRJDB1234,PRJDB5678");
      expect(result.query.bool.filter).toEqual([PUBLIC_ONLY]);
    });
    it("PRJDB* -> public のみ", () => {
      const result = queryCustomQuery("PRJDB*");
      expect(result.query.bool.filter).toEqual([PUBLIC_ONLY]);
    });
  });
});
