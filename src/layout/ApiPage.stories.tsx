import type { Meta, StoryObj } from "@storybook/react-vite";
import { ApiPage } from "./ApiPage.tsx";

const meta = {
  component: ApiPage,
  args: {},
  decorators: [],
} satisfies Meta<typeof ApiPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
