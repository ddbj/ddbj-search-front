import { useState } from "react";
import { QueryLists } from "@/features/searchResult/organisms/QueryLists.tsx";
import { removeFromSearch } from "@/features/searchResult/utils/removeFromSearch.ts";
import type { AllSearchParams, AllSearchParamsKey } from "@/schema/search.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: QueryLists,
  args: {
    params: {},
    removeParam: (key: AllSearchParamsKey, v: string) => {},
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
      const [params, setParams] = useState<AllSearchParams>({
        types: ["biosample", "sra-analysis"],
        keywords: ["hogemoge", "mogemoge"],
        umbrella: true,
      });
      const removeParam = (key: AllSearchParamsKey, v: string) => {
        setParams((prev) => {
          return removeFromSearch(prev, key, v);
        });
      };
      return <Story args={{ params, removeParam }} />;
    },
  ],
} satisfies Story;
