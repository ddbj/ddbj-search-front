import { Publication } from "./Publication.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: Publication,
  args: {},
  decorators: [],
} satisfies Meta<typeof Publication>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
