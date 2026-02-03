import { useState } from "react";
import { __TEST_updateFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { QueryLists } from "@/features/searchResult/result/QueryLists.tsx";
import type { AnySearchParams, AnySearchParamsKey } from "@/schema/search/any.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
const { removeFromSearch } = __TEST_updateFunctions;
const meta = {
  component: QueryLists,
  args: {
    searchParams: {},
    removeParamFunc: (key: AnySearchParamsKey, v: string) => {},
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
} satisfies Meta<typeof QueryLists>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty = {} satisfies Story;

export const HasSearch = {
  decorators: [
    (Story) => {
      const [searchParams, setParams] = useState<AnySearchParams>({
        types: ["biosample", "sra-analysis"],
        keywords: ["hogemoge", "mogemoge"],
        umbrella: true,
      });
      const removeParamFunc = (key: AnySearchParamsKey, v: string) => {
        setParams((prev) => {
          return removeFromSearch(prev, key, v);
        });
      };
      return <Story args={{ searchParams, removeParamFunc }} />;
    },
  ],
} satisfies Story;
