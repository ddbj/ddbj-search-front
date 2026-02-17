import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { AttributeRow } from "./AttributeRow.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: AttributeRow,
  decorators: [
    (Story) => (
      <InfoList>
        <Story />
      </InfoList>
    ),
  ],
} satisfies Meta<typeof AttributeRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Null = {
  args: {
    attributes: null,
  },
};

export const Primary = {
  args: {
    attributes: [
      {
        attribute_name: "strain",
        display_name: "Strain",
        harmonized_name: "strain",
        content: "ATCC 27061",
      },
      {
        attribute_name: "collection_date",
        display_name: "Collection Date",
        harmonized_name: "collection_date",
        content: "2024-01-01",
      },
    ],
  },
} satisfies Story;
