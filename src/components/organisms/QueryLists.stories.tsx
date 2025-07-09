import { QueryLists } from "@/components/organisms/QueryLists.tsx";
import { useSearchQueryMutators } from "@/state/SearchQueryState.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: QueryLists,
  args: {},
  decorators: [
    (Story) => (
      <div className="w-72 bg-gray-100 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof QueryLists>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  decorators: [
    (Story) => {
      const { setSearchQuery } = useSearchQueryMutators();
      setSearchQuery({ keywords: ["human", "cat", "dog", "mouse"] });
      return <Story />;
    },
  ],
} satisfies Story;

export const Empty = {
  decorators: [
    (Story) => {
      const { setSearchQuery } = useSearchQueryMutators();
      setSearchQuery({ keywords: [] });
      return <Story />;
    },
  ],
} satisfies Story;
