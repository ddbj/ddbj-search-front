import { Chip } from "@heroui/react";
import { Link, useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import dayjs from "dayjs";
import type { ComponentProps, FC } from "react";
import type { DBType } from "@/consts/db.ts";
import { SearchBox } from "@/features/initialSearch/SearchBox.tsx";
import { Logo } from "@/features/shared/graphics/logo.tsx";
import type { AnySearchParams } from "@/schema/search/any.ts";

const wrapperClasses = clsx("flex w-full flex-col items-center gap-8 bg-white py-24 shadow-lg");
const sampleQuerySectionClasses = clsx(
  "flex flex-col gap-3 overflow-y-auto rounded bg-gray-50 p-4 text-gray-600",
);
const sampleQueryTitleClasses = clsx("text-sm font-semibold text-gray-600");
const sampleQueryListClasses = clsx("flex flex-wrap gap-2");
const sampleQueryLinkClasses = clsx(
  // "block max-w-full rounded-full outline-none",
  // "focus-visible:outline-fire-bush-600 focus-visible:outline-2 focus-visible:outline-offset-2",
);
const sampleQueryChipClasses = clsx(
  "text-link-primary rounded-full border-1 border-gray-300 bg-white",
);
const sampleQueryLabelClasses = clsx("text-left leading-5 break-words whitespace-normal");
type SearchProps = ComponentProps<typeof SearchBox>;
type SampleQuery = {
  id: string;
  label: string;
  to: string;
  search: AnySearchParams;
};

export const HomePage: FC = () => {
  const navigate = useNavigate();
  const sampleQueries = getSampleQueries(new Date());

  const onSearch: SearchProps["onSearch"] = (types: DBType[], query: string[]) => {
    const { to, search } = makeNavigateArgs(types, query);
    // console.log(to, search);
    navigate({ to, search });
  };
  return (
    <div className={wrapperClasses}>
      <Logo />
      <div className={"flex w-4xl flex-col gap-16"}>
        <SearchBox onSearch={onSearch} />
        <SampleQueryList queries={sampleQueries} />
      </div>
    </div>
  );
};

const SampleQueryList: FC<{ queries: SampleQuery[] }> = ({ queries }) => (
  <section className={sampleQuerySectionClasses} aria-labelledby="sample-query-heading">
    <h2 id="sample-query-heading" className={sampleQueryTitleClasses}>
      Sample queries
    </h2>
    <div className={sampleQueryListClasses}>
      {queries.map((query) => (
        <Link
          key={query.id}
          to={query.to}
          search={query.search}
          className={sampleQueryLinkClasses}
          data-testid={`sample-query-${query.id}`}
        >
          <Chip color="default" size="md" variant="secondary" className={sampleQueryChipClasses}>
            <Chip.Label className={sampleQueryLabelClasses}>{query.label}</Chip.Label>
          </Chip>
        </Link>
      ))}
    </div>
  </section>
);

const makeNavigateArgs = (
  types: DBType[],
  _query: string[],
): { to: string; search: AnySearchParams } => {
  const query = _query.filter((q) => q !== "");
  const to = types.length === 1 ? `/entry/${types[0]}/` : "/entry/";
  const search = {
    keywords: query.length ? query : undefined,
    types: types.length > 1 ? types : undefined,
  };
  return { to, search };
};

const makePastYearsDateRange = (
  referenceDate: Date,
  years: number,
): Pick<AnySearchParams, "datePublishedFrom" | "datePublishedTo"> => {
  const current = dayjs(referenceDate);
  return {
    datePublishedFrom: current.subtract(years, "year").format("YYYY-MM-DD"),
    datePublishedTo: current.format("YYYY-MM-DD"),
  };
};

const getSampleQueries = (referenceDate: Date): SampleQuery[] => [
  {
    id: "bioproject-crest",
    label: "BioProject: CREST grant",
    to: "/entry/bioproject/",
    search: { grant: "CREST" },
  },
  {
    id: "biosample-sars-cov2",
    label: "BioSample: first published in the past 1 year, including SARS-COV2",
    to: "/entry/biosample/",
    search: {
      keywords: ["SARS-COV2"],
      ...makePastYearsDateRange(referenceDate, 1),
    },
  },
  {
    id: "gea-single-cell",
    label: "GEA: first published in the past 10 years, including single-cell",
    to: "/entry/gea/",
    search: {
      keywords: ["single-cell"],
      ...makePastYearsDateRange(referenceDate, 10),
    },
  },
];

// eslint-disable-next-line react-refresh/only-export-components -- Test helper stays colocated with home page navigation and sample query mapping.
export const __HOME_PAGE_TEST__ = { getSampleQueries, makeNavigateArgs, makePastYearsDateRange };
