import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import type { AnySearchParams, AnySearchParamsKey } from "@/schema/search/any.ts";
import { __TEST_updateFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { QueryTipList } from "@/views/searchResult/components/result/QueryTipList.tsx";

const { removeFromSearch } = __TEST_updateFunctions;
const meta = {
  component: QueryTipList,
  args: {
    searchParams: {},
    removeParamFunc: (_key: AnySearchParamsKey | AnySearchParamsKey[], _v: string) => {},
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-72 bg-gray-100 p-4">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof QueryTipList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty = {} satisfies Story;

export const HasSearch = {
  decorators: [
    (Story) => {
      const [searchParams, setParams] = useState<AnySearchParams>({
        types: ["biosample", "sra-analysis"],
        keywords: ["hogemoge", "mogemoge"],
        organism: "562",
      });
      const removeParamFunc = (key: AnySearchParamsKey | AnySearchParamsKey[], v: string) => {
        setParams((prev) => {
          return removeFromSearch(prev, key, v);
        });
      };
      return <Story args={{ searchParams, removeParamFunc }} />;
    },
  ],
} satisfies Story;
