import { Grant } from "./Grant.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: Grant,
  args: {
    value: "",
    update: (v: string) => {},
  },
  decorators: [],
} satisfies Meta<typeof Grant>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
