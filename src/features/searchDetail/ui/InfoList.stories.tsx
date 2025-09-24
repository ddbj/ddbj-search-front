import { InfoList } from "./InfoList.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: InfoList,
  args: {},
  decorators: [],
} satisfies Meta<typeof InfoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
