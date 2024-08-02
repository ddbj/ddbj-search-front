import { ReactiveList } from "@appbaseio/reactivesearch";
import { Pagination } from "@/components/ui/result/Pagination.tsx";
import { SearchResultCard } from "@/components/ui/result/SearchResultCard.tsx";
import { SearchResultSkeleton } from "@/components/ui/result/SearchResultSkeleton.tsx";

function NoResults() {
  return (
    <div className="p-4">
      <h1 className="mb-3">No Results</h1>
      <p>There is no result</p>
    </div>
  );
}

export function Result() {
  return (
    <ReactiveList
      componentId="list"
      dataField="identifier,isPartOf,type,organism.name,datePublished"
      size={10}
      renderNoResults={() => <NoResults />}
      pagination
      showEndPage
      renderPagination={(opts) => {
        return <Pagination current={opts.currentPage + 1} total={opts.totalPages} />;
      }}
      react={{
        and: [
          "query",
          "title",
          "description",
          "name",
          "isPartOf",
          "type",
          "organism",
          "datePublished",
          "visibility",
        ],
      }}
      renderResultStats={(stats) => {
        const total: number = stats.numberOfResults;
        const completeTimeInfo = `Completed searching in ${stats.time} ms`;
        const countInfo = `Found ${total >= 10000 ? "more than " : ""}${stats.numberOfResults} entries`;

        return (
          <span className={"mb-2 text-sm"}>
            {countInfo} / {completeTimeInfo}
          </span>
        );
      }}
    >
      {({ data, loading }) =>
        loading ? (
          <SearchResultSkeleton />
        ) : (
          <ReactiveList.ResultListWrapper className="flex flex-col gap-4">
            {data.map((item: any) => (
              <SearchResultCard key={item._id} item={item} />
            ))}
          </ReactiveList.ResultListWrapper>
        )
      }
    </ReactiveList>
  );
}
