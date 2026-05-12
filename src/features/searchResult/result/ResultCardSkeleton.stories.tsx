import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResultCardSkeleton } from "./ResultCardSkeleton.tsx";

const meta = {
  component: ResultCardSkeleton,
  args: {},
  decorators: [
    (Story) => (
      <div className="max-w-5xl p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ResultCardSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
