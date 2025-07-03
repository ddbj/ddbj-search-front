import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import { Logo } from "@/components/graphics/logo.tsx";
import { InitialSearch } from "@/components/organisms/InitialSearch.tsx";
import type { ComponentProps, FC } from "react";

const wrapperClasses = clsx("flex w-full flex-col items-center gap-8 pt-24");
type SearchProps = ComponentProps<typeof InitialSearch>;

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const onSearch: SearchProps["onSearch"] = (types: string[], query: string) => {
    const { to, search } = makeNavigateArgs(types, query);
    console.log(to, search);
    navigate({ to, search });
  };

  return (
    <div className={wrapperClasses}>
      <Logo />
      <div className={"w-4xl"}>
        <InitialSearch onSearch={onSearch} />
      </div>
    </div>
  );
};

const makeNavigateArgs = (_types: string[], query: string) => {
  const to = _types.length === 1 ? `/${_types[0]}` : "/all";
  const keywords = query !== "" ? query : undefined;
  const types = _types.length > 1 ? _types.sort().join(",") : undefined;
  const search = { keywords, types };
  return { to, search };
};

export const __HOME_PAGE_TEST__ = { makeNavigateArgs };
