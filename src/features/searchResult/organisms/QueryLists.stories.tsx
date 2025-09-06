import { useState } from "react";
import { __TEST_updateFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import { QueryLists } from "@/features/searchResult/organisms/QueryLists.tsx";
import type { AnySearchParams, AnySearchParamsKey } from "@/schema/search/any.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
const { removeFromSearch } = __TEST_updateFunctions;
const meta = {
  component: QueryLists,
  args: {
    params: {},
    removeParam: (key: AnySearchParamsKey, v: string) => {},
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
      const [params, setParams] = useState<AnySearchParams>({
        types: ["biosample", "sra-analysis"],
        keywords: ["hogemoge", "mogemoge"],
        umbrella: true,
      });
      const removeParam = (key: AnySearchParamsKey, v: string) => {
        setParams((prev) => {
          return removeFromSearch(prev, key, v);
        });
      };
      return <Story args={{ params, removeParam }} />;
    },
  ],
} satisfies Story;
