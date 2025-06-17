import { Search } from "@/components/search.tsx";
import type { StoryObj, Meta } from "@storybook/react-vite";

const meta = {
  component: Search,
  decorators: [
    (Story) => (
      <div className="w-4xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary = {} satisfies Story;
