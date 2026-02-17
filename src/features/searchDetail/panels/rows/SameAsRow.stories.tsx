import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { SameAsRow } from "./SameAsRow.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: SameAsRow,
  decorators: [
    (Story) => (
      <InfoList>
        <Story />
      </InfoList>
    ),
  ],
} satisfies Meta<typeof SameAsRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Null = {
  args: {
    sameAs: null,
  },
};

export const Primary = {
  args: {
    sameAs: [
      {
        identifier: "PRJNA21211",
        type: "bioproject",
        url: "https://www.ncbi.nlm.nih.gov/bioproject/PRJNA21211",
      },
    ],
  },
} satisfies Story;

export const MultipleEntries = {
  args: {
    sameAs: [
      {
        identifier: "PRJNA21211",
        type: "bioproject",
        url: "https://www.ncbi.nlm.nih.gov/bioproject/PRJNA21211",
      },
      {
        identifier: "PRJNA21211",
        type: "bioproject",
        url: "https://www.ncbi.nlm.nih.gov/bioproject/PRJNA21211",
      },
    ],
  },
} satisfies Story;
