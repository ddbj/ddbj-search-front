import { QueryLists } from "@/components/organisms/QueryLists.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: QueryLists,
  args: {},
  decorators: [],
} satisfies Meta<typeof QueryLists>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
