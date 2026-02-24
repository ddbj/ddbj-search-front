import { useState } from "react";
import { __TEST_updateFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { ResultInfo } from "./ResultInfo.tsx";
import type { AnySearchParams, AnySearchParamsKey } from "@/schema/search/any.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const { removeFromSearch } = __TEST_updateFunctions;

const meta = {
  component: ResultInfo,
  args: {
    itemCount: 123456,
    perPage: 20,
    currentPage: 1,
    searchParams: {},
    changeSortFunc: () => {},
    removeParamFunc: (key: AnySearchParamsKey | AnySearchParamsKey[], v: string) => {},
  },
  decorators: [],
} satisfies Meta<typeof ResultInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const HasSearch = {
  decorators: [
    (Story, ctx) => {
      const [searchParams, setSearchParams] = useState<AnySearchParams>({
        types: ["biosample", "sra-analysis"],
        keywords: ["hogemoge", "mogemoge"],
        umbrella: true,
      });
      const removeParamFunc = (key: AnySearchParamsKey | AnySearchParamsKey[], v: string) => {
        setSearchParams((prev) => {
          return removeFromSearch(prev, key, v);
        });
      };

      return <Story args={{ ...ctx.args, searchParams, removeParamFunc }} />;
    },
  ],
} satisfies Story;
