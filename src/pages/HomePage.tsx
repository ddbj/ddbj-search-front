import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import { SearchBox } from "@/features/initialSearch/SearchBox.tsx";
import { Logo } from "@/features/graphics/logo.tsx";
import type { DBType } from "@/consts/db.ts";
import type { SearchBase } from "@/schema/search.ts";
import type { ComponentProps, FC } from "react";

const wrapperClasses = clsx("flex w-full flex-col items-center gap-8 pt-24");
type SearchProps = ComponentProps<typeof SearchBox>;

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const onSearch: SearchProps["onSearch"] = (types: DBType[], query: string[]) => {
    const { to, search } = makeNavigateArgs(types, query);
    // console.log(to, search);
    navigate({ to, search });
  };

  return (
    <div className={wrapperClasses}>
      <Logo />
      <div className={"w-4xl"}>
        <SearchBox onSearch={onSearch} />
      </div>
    </div>
  );
};

const makeNavigateArgs = (
  types: DBType[],
  _query: string[]
): { to: string; search: SearchBase } => {
  // todo: change return type according to toPath
  const query = _query.filter((q) => q !== "");
  const to = types.length === 1 ? `/entry/${types[0]}` : "/entry";
  const search = {
    keywords: query.length ? query : undefined,
    types: types.length > 1 ? types : undefined,
  };
  return { to, search };
};

export const __HOME_PAGE_TEST__ = { makeNavigateArgs };
