import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import { dbTypes } from "@/consts/db.ts";
import { OtherTypeSelector } from "./OtherTypeSelector.tsx";

const mockMoveToEntryRoot = fn(() => {});

const meta = {
  component: OtherTypeSelector,
  args: {
    currentType: dbTypes["sra-analysis"],
    linkSearchParams: {
      keywords: ["metagenome"],
    },
    moveToEntryRoot: mockMoveToEntryRoot,
  },
  decorators: [
    (Story) => (
      <div className="w-[384px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OtherTypeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const SwitchType = {
  play: async ({ canvas, userEvent }) => {
    mockMoveToEntryRoot.mockReset();
    await expect(await canvas.findByRole("checkbox", { name: "SRA Analysis" })).toBeChecked();
    await userEvent.click(canvas.getByText("Other types"));
    await userEvent.click(await canvas.findByRole("checkbox", { name: "BioProject" }));
    await expect(mockMoveToEntryRoot).toBeCalledTimes(1);
    await expect(mockMoveToEntryRoot).toHaveBeenLastCalledWith({
      keywords: ["metagenome"],
      types: ["bioproject", "sra-analysis"],
    });
  },
} satisfies Story;
