import { expect } from "storybook/test";
import { type ComponentProps, useEffect, useState } from "react";
import { CheckboxText } from "./CheckboxText.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const StatefulCheckboxText = ({
  isSelected = false,
  ...args
}: ComponentProps<typeof CheckboxText>) => {
  const [selected, setSelected] = useState(isSelected);

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  return (
    <div className="w-[384px] p-4">
      <CheckboxText {...args} isSelected={selected} setIsSelected={setSelected} />
      <div className="mt-2 text-sm text-gray-500">
        Selected: <span>{selected ? "true" : "false"}</span>
      </div>
    </div>
  );
};

const meta = {
  component: CheckboxText,
  args: {
    labelStr: "BioProject",
    value: "bioproject",
  },
  render: (args) => <StatefulCheckboxText {...args} />,
} satisfies Meta<typeof CheckboxText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText("Selected:")).toBeInTheDocument();
    await expect(canvas.getByText("false")).toBeInTheDocument();
    await userEvent.click(await canvas.findByRole("checkbox", { name: "BioProject" }));
    await expect(canvas.getByText("true")).toBeInTheDocument();
  },
} satisfies Story;

export const Checked = {
  args: {
    isSelected: true,
  },
} satisfies Story;

export const WithLink = {
  args: {
    labelStr: "BioProject details",
    value: "bioproject",
    to: "/entry/bioproject",
    isSelected: true,
  },
  play: async ({ canvas }) => {
    await expect(await canvas.findByRole("checkbox", { name: "BioProject details" })).toBeChecked();
    const link = await canvas.findByRole("link", { name: "BioProject details" });
    await expect(link).toHaveAttribute("href", expect.stringContaining("/entry/bioproject"));
  },
} satisfies Story;
