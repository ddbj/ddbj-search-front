import { DateRangePicker } from "./DateRangePicker.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DateRangePicker,
  args: {},
  decorators: [],
} satisfies Meta<typeof DateRangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    label: "Date Published",
    value: null,
    onChange: (value) => {
      console.log(value);
    },
  },
} satisfies Story;
