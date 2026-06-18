import type { Meta, StoryObj } from "@storybook/react-vite";
import { PanelWrapper } from "./PanelWrapper.tsx";

const meta = {
  component: PanelWrapper,
  args: {
    children: "Panel Wrapper Content",
  },
  decorators: [],
} satisfies Meta<typeof PanelWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
