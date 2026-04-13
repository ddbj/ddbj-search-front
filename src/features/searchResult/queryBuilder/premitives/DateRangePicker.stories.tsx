import { expect, fn } from "storybook/test";
import { type ComponentProps, useEffect, useState } from "react";
import { DateRangePicker } from "./DateRangePicker.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const StatefulDateRangePicker = ({
  onChange,
  value: initialValue,
  ...args
}: ComponentProps<typeof DateRangePicker>) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <DateRangePicker
      {...args}
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
        onChange(nextValue);
      }}
    />
  );
};

const meta = {
  component: DateRangePicker,
  args: {
    label: "Published Date",
    value: "",
    onChange: fn(),
  },
  render: (args) => <StatefulDateRangePicker {...args} />,
  decorators: [
    (Story) => (
      <div className="w-[320px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DateRangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const WithSelectedRange = {
  args: {
    value: "2024-01-01,2024-01-31",
  },
} satisfies Story;

export const PopoverOpen = {
  play: async ({ canvasElement, userEvent, step }) => {
    await step("open popover", async () => {
      const trigger = canvasElement.querySelector('button[aria-haspopup="dialog"]');
      await expect(trigger).toBeInTheDocument();
      await userEvent.click(trigger!);
    });

    await step("show calendar overlay", async () => {
      const dialog = document.querySelector('[role="dialog"]');
      await expect(dialog).toBeInTheDocument();
    });
  },
} satisfies Story;
