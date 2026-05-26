import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, screen, waitFor, within } from "storybook/test";
import { SortDropdown } from "@/features/searchResult/result/SortDropdown.tsx";

const mockChangeSort = fn();

const meta = {
  component: SortDropdown,
  args: {
    changeSortFunc: mockChangeSort,
    currentSort: null,
  },
  decorators: [
    (Story) => (
      <div className="w-fit p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SortDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const findVisibleOption = async (name: RegExp) => {
  let visibleOption: HTMLElement | undefined;

  await waitFor(() => {
    const options = screen.queryAllByRole("option", { hidden: true, name });
    const option = options.find((element): element is HTMLElement => {
      if (!(element instanceof HTMLElement)) return false;

      try {
        expect(element).toBeVisible();
        return true;
      } catch {
        return false;
      }
    });

    if (option === undefined) {
      throw new Error(`Visible option not found: ${String(name)}`);
    }

    visibleOption = option;
  });

  return visibleOption!;
};

export const Primary = {} satisfies Story;

export const UpdatedNewestFirst = {
  args: {
    currentSort: "dateModified:desc",
  },
} satisfies Story;

export const MenuOpen = {
  play: async ({ canvas, step, userEvent }) => {
    await step("click trigger", async () => {
      const trigger = await canvas.findByRole("button", { name: "Sort search results" });
      await userEvent.click(trigger);
    });

    await step("show listbox", async () => {
      const updatedDateDesc = await findVisibleOption(/Updated Date\s+Newest first/);
      await expect(updatedDateDesc).toBeVisible();
    });

    await step("show sort captions", async () => {
      const updatedDateDesc = await findVisibleOption(/Updated Date\s+Newest first/);
      await expect(updatedDateDesc).toBeVisible();
      await expect(updatedDateDesc).toHaveTextContent("Updated Date");
      await expect(updatedDateDesc).toHaveTextContent("Newest first");
    });
  },
} satisfies Story;

export const SelectPublishedOldest = {
  play: async ({ args, canvas, step, userEvent }) => {
    mockChangeSort.mockReset();

    await step("click trigger", async () => {
      const trigger = await canvas.findByRole("button", { name: "Sort search results" });
      await userEvent.click(trigger);
    });

    await step("select published date asc with keyboard", async () => {
      await userEvent.keyboard("{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}{Enter}");
    });

    await step("call change handler", async () => {
      await expect(args.changeSortFunc).toHaveBeenLastCalledWith("datePublished:asc");
    });

    await step("update selected label", async () => {
      const trigger = await canvas.findByRole("button", { name: "Sort search results" });
      await expect(within(trigger).getByText("Published Date")).toBeVisible();
      await expect(within(trigger).getByText("Oldest first")).toBeVisible();
    });
  },
} satisfies Story;
