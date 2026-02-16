import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { GrantsRow } from "./GrantsRow.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: GrantsRow,
  decorators: [
    (Story) => (
      <InfoList>
        <Story />
      </InfoList>
    ),
  ],
} satisfies Meta<typeof GrantsRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Null = {
  args: {
    grants: null,
  },
};

export const Primary = {
  args: {
    grants: [
      {
        id: "12345",
        title: "Development of a new search engine",
        agency: [
          {
            name: "Japan Society for the Promotion of Science",
            abbreviation: "JSPS",
          },
        ],
      },
      {
        id: "67890",
        title: "Study of genome sequence",
        agency: [
          {
            name: "National Institutes of Health",
            abbreviation: "NIH",
          },
        ],
      },
    ],
  },
} satisfies Story;
