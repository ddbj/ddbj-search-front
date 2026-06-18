import type { Meta, StoryObj } from "@storybook/react-vite";
import { GlobalHeader } from "./GlobalHeader.tsx";

const meta = {
  component: GlobalHeader,
  args: {},
  decorators: [],
} satisfies Meta<typeof GlobalHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    breadcrumbsPaths: [],
  },
} satisfies Story;
