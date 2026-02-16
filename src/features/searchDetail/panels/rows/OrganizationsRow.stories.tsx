import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { OrganizationsRow } from "./OrganizationsRow.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: OrganizationsRow,
  decorators: [
    (Story) => (
      <InfoList>
        <Story />
      </InfoList>
    ),
  ],
} satisfies Meta<typeof OrganizationsRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Null = {
  args: {
    organizations: null,
  },
};

export const Primary = {
  args: {
    organizations: [
      {
        name: "National Institute of Genetics",
        abbreviation: "NIG",
        url: "https://www.nig.ac.jp/",
        role: "Sponsor",
        organizationType: "Institute",
      },
      {
        name: "DNA Data Bank of Japan",
        abbreviation: "DDBJ",
        url: "https://www.ddbj.nig.ac.jp/",
        role: "Data Center",
        organizationType: "Institute",
      },
    ],
  },
} satisfies Story;
