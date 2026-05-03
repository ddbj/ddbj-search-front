import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import type { DBType } from "@/consts/db.ts";
import { TypeSelector } from "@/features/searchResult/queryBuilder/controls/TypeSelector.tsx";
import { sleep } from "@/utils/sleep.ts";

const mockUpdateTypes = fn((_v: DBType[]) => {});

const meta = {
  component: TypeSelector,
  args: {
    value: [],
    update: mockUpdateTypes,
    linkSearchParams: {},
    countData: [
      {
        value: "bioproject",
        count: 100,
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-[384px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TypeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const ToggleType = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateTypes.mockReset();
    const checkbox = await canvas.findByRole("checkbox", { name: "BioProject (100)" });
    const link = await canvas.findByRole("link", { name: "BioProject (100)" });

    await expect(link).toHaveAttribute("href", expect.stringContaining("/entry/bioproject"));
    await userEvent.click(checkbox);
    await expect(mockUpdateTypes).toBeCalledTimes(0);
    await sleep(300);
    await expect(mockUpdateTypes).toBeCalledTimes(1);
    await expect(mockUpdateTypes).toHaveBeenLastCalledWith(["bioproject"]);
  },
} satisfies Story;
