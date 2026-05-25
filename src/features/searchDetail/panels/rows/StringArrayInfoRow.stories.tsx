import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { StringArrayInfoRow } from "./StringArrayInfoRow.tsx";

const meta = {
  component: StringArrayInfoRow,
  decorators: [
    (Story) => (
      <InfoList>
        <Story />
      </InfoList>
    ),
  ],
} satisfies Meta<typeof StringArrayInfoRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    term: "Library Selection",
    value: ["RANDOM", "PCR"],
  },
} satisfies Story;

export const Empty = {
  args: {
    term: "Library Selection",
    value: [],
  },
} satisfies Story;
