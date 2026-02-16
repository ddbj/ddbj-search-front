import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { ExternalLinksRow } from "./ExternalLinksRow.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: ExternalLinksRow,
  decorators: [
    (Story) => (
      <InfoList>
        <Story />
      </InfoList>
    ),
  ],
} satisfies Meta<typeof ExternalLinksRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Null = {
  args: {
    externalLinks: null,
  },
};

export const Primary = {
  args: {
    externalLinks: [
      {
        label: "DDBJ",
        url: "https://www.ddbj.nig.ac.jp/",
      },
      {
        label: "NCBI",
        url: "https://www.ncbi.nlm.nih.gov/",
      },
    ],
  },
} satisfies Story;
