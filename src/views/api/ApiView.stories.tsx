import type { Meta, StoryObj } from "@storybook/react-vite";
import { ApiView } from "./ApiView.tsx";

const meta = {
  component: ApiView,
  args: {},
  decorators: [],
} satisfies Meta<typeof ApiView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
