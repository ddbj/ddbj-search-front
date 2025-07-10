import { KeywordInput } from "./KeywordInput.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: KeywordInput,
  args: {},
  decorators: [],
} satisfies Meta<typeof KeywordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
