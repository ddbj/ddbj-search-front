import { useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect } from "react";
import { QueryBuilder } from "@/components/organisms/QueryBuilder.tsx";
import { useSearchQueryMutators, useSearchQueryState } from "@/state/SearchQueryState.ts";

export const SearchResultPage = () => {
  const search = useSearch({ strict: false });
  const navigate = useNavigate();
  const { setSearchQuery } = useSearchQueryMutators();
  const searchQuery = useSearchQueryState();

  useEffect(() => {
    console.log(search);
    setSearchQuery(search);
  }, [search, setSearchQuery]);

  useEffect(() => {
    navigate({ search: searchQuery as any });
  }, [searchQuery, navigate]);

  return (
    <main>
      <QueryBuilder></QueryBuilder>
      <section></section>
    </main>
  );
};
