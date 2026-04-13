import { useState } from "react";
import { expect, fn, within } from "storybook/test";
import { __TEST_updateFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { ResultInfo } from "./ResultInfo.tsx";
import type { AnySearchParams, AnySearchParamsKey } from "@/schema/search/any.ts";
import type { SortKey } from "@/api/consts.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const { removeFromSearch } = __TEST_updateFunctions;
const mockChangeSort = fn();

const meta = {
  component: ResultInfo,
  args: {
    itemCount: 123456,
    perPage: 20,
    currentPage: 1,
    searchParams: {},
    changeSortFunc: (_sort: SortKey | null) => {},
    removeParamFunc: (_key: AnySearchParamsKey | AnySearchParamsKey[], _v: string) => {},
  },
  decorators: [
    (Story) => (
      <div className="max-w-5xl p-4">
        <Story />
      </div>
    ),
  ],
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

export const SortUpdatedNewestFirst = {
  args: {
    searchParams: {
      sort: "dateModified:desc",
    },
  },
} satisfies Story;

export const ChangeSort = {
  decorators: [
    (Story, ctx) => {
      const [searchParams, setSearchParams] = useState<AnySearchParams>({
        sort: "dateModified:desc",
      });
      const changeSortFunc = (sort: SortKey | null) => {
        mockChangeSort(sort);
        setSearchParams((prev) => {
          if (sort === null) {
            const { sort: _sort, ...next } = prev;
            return next;
          }
          return { ...prev, sort };
        });
      };

      return <Story args={{ ...ctx.args, searchParams, changeSortFunc }} />;
    },
  ],
  play: async ({ canvas, step, userEvent }) => {
    mockChangeSort.mockReset();

    await step("open sort menu", async () => {
      const trigger = await canvas.findByRole("button", { name: "Sort search results" });
      await userEvent.click(trigger);
    });

    await step("select published oldest first", async () => {
      await userEvent.keyboard("{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}{Enter}");
    });

    await step("call change handler with selected sort", async () => {
      await expect(mockChangeSort).toHaveBeenLastCalledWith("datePublished:asc");
    });

    await step("reflect selected sort in trigger", async () => {
      const trigger = await canvas.findByRole("button", { name: "Sort search results" });
      await expect(within(trigger).getByText("Published Date")).toBeVisible();
      await expect(within(trigger).getByText("Oldest first")).toBeVisible();
    });
  },
} satisfies Story;
