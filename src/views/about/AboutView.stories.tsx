import type { Meta, StoryObj } from "@storybook/react-vite";
import { AboutView } from "./AboutView.tsx";

const meta = {
  component: AboutView,
  args: {},
  decorators: [],
} satisfies Meta<typeof AboutView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
