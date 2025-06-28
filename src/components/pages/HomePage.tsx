import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import { Logo } from "@/components/graphics/logo.tsx";
import { Search } from "@/components/search.tsx";
import type { ComponentProps, FC } from "react";

const wrapperClasses = clsx("flex w-full flex-col items-center gap-8 pt-24");
type SearchProps = ComponentProps<typeof Search>;

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const onSearch: SearchProps["onSearch"] = (type: string[], query: string) => {
    const { to, search } = makeNavigateArgs(type, query);
    console.log(type, query);
    navigate({ to, search });
  };

  return (
    <div className={wrapperClasses}>
      <Logo />
      <div className={"w-4xl"}>
        <Search onSearch={onSearch} />
      </div>
    </div>
  );
};

const makeNavigateArgs = (type: string[], query: string) => {
  const to = "all";
  const search = query !== "" ? { keywords: query } : {};

  return { to, search };
};

export const __HOME_TEST__ = { makeNavigateArgs };
