import type { StoryObj, Meta } from "@storybook/react-vite";
import { Search } from "./search.tsx";

const meta = {
  component: Search,
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary = {} satisfies Story;
