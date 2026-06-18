import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusView } from "./StatusView.tsx";

const meta = {
  component: StatusView,
  args: {},
  decorators: [],
} satisfies Meta<typeof StatusView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
