import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import { CheckboxText } from "./CheckboxText.tsx";

const mockSetIsSelected = fn((_value: boolean) => {});

const meta = {
  component: CheckboxText,
  args: {
    labelStr: "BioProject",
    value: "bioproject",
    setIsSelected: mockSetIsSelected,
  },
  decorators: [
    (Story) => (
      <div className="w-[384px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CheckboxText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  play: async ({ canvas, userEvent }) => {
    mockSetIsSelected.mockReset();
    const checkbox = await canvas.findByRole("checkbox", { name: "BioProject" });
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(mockSetIsSelected).toHaveBeenCalledTimes(1);
    await expect(mockSetIsSelected).toHaveBeenLastCalledWith(true);
  },
} satisfies Story;

export const Checked = {
  args: {
    isSelected: true,
  },
  play: async ({ canvas }) => {
    await expect(await canvas.findByRole("checkbox", { name: "BioProject" })).toBeChecked();
  },
} satisfies Story;

export const WithLink = {
  args: {
    labelStr: "BioProject details",
    value: "bioproject",
    to: "/entry/bioproject/",
    isSelected: true,
    setIsSelected: mockSetIsSelected,
  },
  play: async ({ canvas, userEvent }) => {
    mockSetIsSelected.mockReset();
    const checkbox = await canvas.findByRole("checkbox", { name: "BioProject details" });
    await expect(checkbox).toBeChecked();
    const link = await canvas.findByRole("link", { name: "BioProject details" });
    await expect(link).toHaveAttribute("href", expect.stringContaining("/entry/bioproject"));
    await userEvent.click(link);
    await expect(mockSetIsSelected).not.toHaveBeenCalled();
  },
} satisfies Story;
