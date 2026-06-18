import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoList } from "@/views/searchDetail/components/ui/InfoList.tsx";

const meta = {
  component: InfoList,
  args: {},
  decorators: [],
} satisfies Meta<typeof InfoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
