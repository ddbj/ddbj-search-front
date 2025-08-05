import { useState } from "react";
import { DateRangePicker } from "./DateRangePicker.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DateRangePicker,
  args: {
    label: "Date Published",
    value: "",
    onChange: () => {},
  },
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState<string>("");
      return <Story args={{ ...args, value, onChange: setValue }} />;
    },
  ],
} satisfies Meta<typeof DateRangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
