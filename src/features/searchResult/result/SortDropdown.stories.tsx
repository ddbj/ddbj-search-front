import { expect, fn } from "storybook/test";
import { SortDropdown } from "@/features/searchResult/result/SortDropdown.tsx";
import { findByListValue, findBySlot } from "@/utils/storybook.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const mockChangeSort = fn();

const meta = {
  component: SortDropdown,
  args: {
    changeSortFunc: mockChangeSort,
    currentSort: null,
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SortDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const UpdatedNewestFirst = {
  args: {
    currentSort: "dateModified:desc",
  },
} satisfies Story;

export const MenuOpen = {
  play: async ({ step, userEvent }) => {
    await step("click trigger", async () => {
      const trigger = await findBySlot("trigger");
      await userEvent.click(trigger);
    });

    await step("show listbox", async () => {
      const updatedDateDesc = await findByListValue("dateModified:desc");
      await expect(updatedDateDesc).toBeVisible();
    });
  },
} satisfies Story;

export const SelectPublishedOldest = {
  play: async ({ args, step, userEvent }) => {
    mockChangeSort.mockReset();

    await step("click trigger", async () => {
      const trigger = await findBySlot("trigger");
      await userEvent.click(trigger);
    });

    await step("select published date asc", async () => {
      const publishedDateAsc = await findByListValue("datePublished:asc");
      await userEvent.click(publishedDateAsc);
    });

    await step("call change handler", async () => {
      await expect(args.changeSortFunc).toHaveBeenLastCalledWith("datePublished:asc");
    });
  },
} satisfies Story;
