import { PropertiesPanel } from "./PropertiesPanel.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: PropertiesPanel,
  args: {},
  decorators: [],
} satisfies Meta<typeof PropertiesPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
