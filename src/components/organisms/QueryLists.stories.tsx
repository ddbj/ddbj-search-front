import { QueryLists } from "@/components/organisms/QueryLists.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { __SEARCH_QUERY_STATE_TEST__, useSearchQueryMutators } from "@/state/SearchQueryState.ts";
import { stringToDateRange2 } from "@/utils/date.ts";

const { getNewInitialState } = __SEARCH_QUERY_STATE_TEST__;

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

export const Empty = {
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
} satisfies Story;

export const Primary = {
  decorators: [
    (Story) => {
      const { _overwriteSearchQuery } = useSearchQueryMutators();
      const newState = getNewInitialState();
      newState.types.biosample = true;
      newState.types["sra-analysis"] = true;
      newState.dateUpdated = stringToDateRange2("2025-07-10", "2025-07-11");
      newState.keywords = "human,cat";
      _overwriteSearchQuery(newState);
      return <Story />;
    },
  ],
} satisfies Story;
