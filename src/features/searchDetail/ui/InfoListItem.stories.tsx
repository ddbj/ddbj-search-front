import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { InfoListItem } from "./InfoListItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: InfoListItem,
  args: {
    term: "Example Term",
    toolTipContent: "This is an example tooltip content.",
    children: "This is the description or content for the info list item.",
  },
  render: (args) => (
    <InfoList className="w-full max-w-3xl">
      <InfoListItem {...args} />
    </InfoList>
  ),
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InfoListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const TooltipOpen = {
  args: {
    tooltipOpen: true,
  },
} satisfies Story;

export const WrappedContent = {
  args: {
    term: "Extremely Long Example Term That Should Wrap In Review",
    termsNowrap: false,
    children:
      "This story keeps the value intentionally long so the reviewer can compare how term and content wrapping behave before and after the HeroUI migration.",
  },
} satisfies Story;
