import { ResultCard } from "./ResultCard.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: ResultCard,
  args: {},
  decorators: [],
} satisfies Meta<typeof ResultCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
