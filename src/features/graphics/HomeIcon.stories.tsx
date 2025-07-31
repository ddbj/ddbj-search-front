import { HomeIcon } from "./HomeIcon.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: HomeIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof HomeIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
