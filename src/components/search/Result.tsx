import { API_BASE_URL } from "@/constants.ts";
import { ReactiveList } from "@appbaseio/reactivesearch";
import { FC, useMemo } from "react";
import { FormattedDate, FormattedMessage, FormattedTime } from "react-intl";
import { Badge, Card, CardSubtitle } from "reactstrap";

const ResultByTable: FC<any> = ({ item }: any) => {
  console.log(item);
  const title = item.title || item.description || item.name;
  const detailUrl = useMemo(
    () => `${API_BASE_URL}/resource/${item.type}/${item.identifier}`,
    [item.identifier, item.type],
  );
  const refsCount = item.dbXrefs.length;

  const groups = useMemo(
    () =>
      Object.entries(
        item.dbXrefs.reduce(
          (result: any, dbXref: any) => ({
            ...result,
            [dbXref.type]: (result[dbXref.type] || 0) + 1,
          }),
          {},
        ),
      ).map(([type, count]: any) => ({ type, count })),
    [item],
  );

  return (
    <a
      href={detailUrl}
      target="_blank"
      className="bg-transparent d-block"
      style={{ display: "block", marginBlock: "0.5rem", textDecoration: "none", color: "black" }}
    >
      <Card className="p-2">
        <div className="small mb-2 pt-1">
          <span className="me-1">{item.identifier}</span>
          <span>{item.type}</span>
        </div>
        <CardSubtitle className="verflow-hidden d-block fs-4 lh-sm mb-2">{title}</CardSubtitle>
        <div className="small mb-2">
          <FormattedMessage id="etnry.related_entry.message" values={{ refsCount }} />
        </div>
        <div className="d-flex gap-3">
          <div className="d-flex gap-1 flex-grow-1 flex-wrap">
            {groups.map((group) => (
              <Badge className="bg-light text-black" key={group.type}>
                {group.type} : {group.count}
              </Badge>
            ))}
          </div>
          {item.datePublished && (
            <div className="d-flex gap-2 small flex-shrink-0">
              <span>
                <FormattedMessage id="entry.published_at" />
              </span>
              <time dateTime={item.datePublished}>
                <span className="me-2">
                  <FormattedDate value={item.datePublished} />
                </span>
                <span>
                  <FormattedTime value={item.datePublished} />
                </span>
              </time>
            </div>
          )}
        </div>
      </Card>
    </a>
  );
};

function Loading() {
  return (
    <div className="d-flex flex-column gap-3">
      <Card className="bg-light" style={{ height: "10rem" }} />
      <Card className="bg-light" style={{ height: "10rem" }} />
      <Card className="bg-light" style={{ height: "10rem" }} />
      <Card className="bg-light" style={{ height: "10rem" }} />
      <Card className="bg-light" style={{ height: "10rem" }} />
    </div>
  );
}

function NoResults() {
  return (
    <div className="p-4">
      <h1 className="mb-3">
        <FormattedMessage id="search.no_results" />
      </h1>
      <p>
        <FormattedMessage id="search.no_results.message" />
      </p>
    </div>
  );
}

export function Result() {
  return (
    <ReactiveList
      componentId="list"
      dataField="identifier,isPartOf,type,organism.name,datePublished"
      size={10}
      pagination
      renderNoResults={() => <NoResults />}
      react={{
        and: ["query", "title", "description", "name", "isPartOf", "type", "organism", "datePublished"],
      }}
      renderResultStats={(stats) => <span style={{ fontSize: 15 }}>{`Completed searching in ${stats.time} ms`}</span>}
    >
      {({ data, loading }) =>
        loading ? (
          <Loading />
        ) : (
          <ReactiveList.ResultListWrapper>
            {data.map((item: any) => (
              <ResultByTable key={item._id} item={item} />
            ))}
          </ReactiveList.ResultListWrapper>
        )
      }
    </ReactiveList>
  );
}
