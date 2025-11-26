import { ApiPage } from "./ApiPage.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: ApiPage,
  args: {},
  decorators: [],
} satisfies Meta<typeof ApiPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
