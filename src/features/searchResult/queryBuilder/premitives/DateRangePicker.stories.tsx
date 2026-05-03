import type { Meta, StoryObj } from "@storybook/react-vite";
import { type ComponentProps, useEffect, useState } from "react";
import { expect, fn, screen, userEvent, waitFor, within } from "storybook/test";
import { DateRangePicker } from "./DateRangePicker.tsx";

const StatefulDateRangePicker = ({
  onChange,
  value: initialValue,
  withClearButton = false,
  ...args
}: ComponentProps<typeof DateRangePicker> & { withClearButton?: boolean }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex flex-col gap-3">
      <DateRangePicker
        {...args}
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
          onChange(nextValue);
        }}
      />
      {withClearButton ? (
        <button
          className="text-fire-bush-700 w-fit text-sm"
          type="button"
          onClick={() => setValue("")}
        >
          Clear range
        </button>
      ) : null}
    </div>
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
  play: async ({ canvas, step }) => {
    await step("open popover", async () => {
      const trigger = await canvas.findByRole("button", { name: /Open Published Date calendar/ });
      await userEvent.click(trigger);
    });

    await step("show calendar overlay", async () => {
      const heading = await screen.findByRole("heading", {
        name: /Published Date calendar, /,
      });
      await expect(heading).toBeVisible();
    });
  },
} satisfies Story;

export const ClearFromParent = {
  args: {
    value: "2024-01-01,2024-01-31",
  },
  render: (args) => <StatefulDateRangePicker {...args} withClearButton />,
  play: async ({ canvas, step }) => {
    await step("show selected range before clearing", async () => {
      const picker = await canvas.findByRole("group", { name: /Published Date Published Date/ });
      const monthStart = within(picker).getByRole("spinbutton", { name: /month, Start Date/ });
      await expect(monthStart).toHaveValue(1);
    });

    await step("clear from parent state", async () => {
      const clearButton = await canvas.findByRole("button", { name: "Clear range" });
      await userEvent.click(clearButton);
    });

    await step("return to empty placeholder state", async () => {
      await waitFor(async () => {
        const picker = await canvas.findByRole("group", {
          name: /Published Date Published Date/,
        });
        const monthStart = within(picker).getByRole("spinbutton", { name: /month, Start Date/ });
        const monthEnd = within(picker).getByRole("spinbutton", { name: /month, End Date/ });
        await expect(monthStart).toHaveValue(0);
        await expect(monthEnd).toHaveValue(0);
      });
    });
  },
} satisfies Story;
