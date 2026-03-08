import React, { FC } from "react";
import { LinkText, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { BASE_URL, URL_PREFIX } from "@/constants.ts";
import { DbXrefsCount, Xref } from "@/types/api.ts";

type Props = {
  refs: Xref[];
  title: string;
  totalCountByType?: DbXrefsCount;
  entryType?: string;
  entryId?: string;
};

export const RefLinks: FC<Props> = ({ refs, title, totalCountByType, entryType, entryId }) => {
  if (!refs || refs.length === 0) return <Row dd={title} />;

  const isTruncated = totalCountByType != null;
  const totalCount = isTruncated ? Object.values(totalCountByType).reduce((a, b) => a + b, 0) : 0;

  const obj = refs.reduce<Record<string, { identifier: string; url: string }[]>>((acc, ref) => {
    if (!acc[ref.type]) acc[ref.type] = [];
    acc[ref.type].push(ref);
    return acc;
  }, {});

  const allTypes = new Set([...Object.keys(obj), ...(totalCountByType ? Object.keys(totalCountByType) : [])]);
  const sortedTypes = [...allTypes].sort((a, b) => a.localeCompare(b));

  const inside = sortedTypes.map((type) => {
    const typeRefs = obj[type] ?? [];
    const typeTotal = totalCountByType?.[type];
    const label = typeTotal != null ? `${type} (${typeRefs.length}/${typeTotal})` : `${type} (${typeRefs.length})`;
    return (
      <div className={"flex"} key={type}>
        <dt className={"w-48 shrink-0 grow-0 font-medium"}>{label}</dt>
        <dd className={"grid grow grid-cols-auto-fill-100 gap-x-3"}>
          {typeRefs.map((ref) => (
            <LinkText key={ref.identifier} href={ref.url} external={true}>
              {ref.identifier}
            </LinkText>
          ))}
        </dd>
      </div>
    );
  });

  const apiUrl =
    isTruncated && entryType && entryId
      ? `${BASE_URL}${URL_PREFIX}/api/entries/${entryType}/${entryId}/dbxrefs.json`
      : null;

  return (
    <Row dd={title}>
      <div className={"flex flex-col gap-3"}>
        {isTruncated && totalCount > refs.length && (
          <p className={"rounded bg-gray-100 px-3 py-2 text-sm text-gray-600"}>
            In favor of readability, the list of DB xrefs is truncated to {refs.length} entries.
            {apiUrl && (
              <>
                {" "}
                For the complete list, please refer to the{" "}
                <a href={apiUrl} className={"text-primary hover:text-primary-dark"} target="_blank" rel="noreferrer">
                  dedicated API
                </a>
                .
              </>
            )}
          </p>
        )}
        <dl className={"flex flex-col gap-3"}>{inside}</dl>
      </div>
    </Row>
  );
};
