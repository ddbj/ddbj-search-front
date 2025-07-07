import { QueryBuilder } from "@/components/organisms/QueryBuilder.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: QueryBuilder,
  args: {},
  decorators: [],
} satisfies Meta<typeof QueryBuilder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
