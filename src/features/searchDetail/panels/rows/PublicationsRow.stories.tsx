import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PublicationsRow } from "./PublicationsRow.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: PublicationsRow,
  decorators: [
    (Story) => (
      <InfoList>
        <Story />
      </InfoList>
    ),
  ],
} satisfies Meta<typeof PublicationsRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Null = {
  args: {
    publications: null,
  },
};

export const Primary = {
  args: {
    publications: [
      {
        id: "19429624",
        title:
          "Genome sequence of Azotobacter vinelandii, an obligate aerobe specialized to support diverse anaerobic metabolic processes.",
        date: null,
        Reference: null,
        url: "https://pubmed.ncbi.nlm.nih.gov/19429624/",
        DbType: "ePubmed",
        status: "ePublished",
      },
    ],
  },
} satisfies Story;
