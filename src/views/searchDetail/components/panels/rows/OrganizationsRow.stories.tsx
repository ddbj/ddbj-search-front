import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Organization } from "@/api/detail/base.ts";
import { InfoList } from "@/views/searchDetail/components/ui/InfoList.tsx";
import { OrganizationsRow } from "./OrganizationsRow.tsx";

const organization = (overrides: Partial<Organization>): Organization => ({
  abbreviation: null,
  name: null,
  organizationType: null,
  role: null,
  url: null,
  ...overrides,
});

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

export const Primary = {
  args: {
    organizations: [
      organization({
        name: "National Institute of Genetics",
        abbreviation: "NIG",
        url: "https://www.nig.ac.jp/",
        role: "Sponsor",
        organizationType: "Institute",
      }),
      organization({
        name: "DNA Data Bank of Japan",
        abbreviation: "DDBJ",
        url: "https://www.ddbj.nig.ac.jp/",
        role: "Data Center",
        organizationType: "Institute",
      }),
    ],
  },
} satisfies Story;

export const WithoutRoleOrType = {
  args: {
    organizations: [
      organization({
        name: "National Center for Biotechnology Information",
        abbreviation: "NCBI",
        url: "https://www.ncbi.nlm.nih.gov/",
      }),
      organization({
        name: "European Bioinformatics Institute",
        abbreviation: "EBI",
        url: "https://www.ebi.ac.uk/",
      }),
    ],
  },
} satisfies Story;

export const WithoutUrl = {
  args: {
    organizations: [
      organization({
        name: "Genome Information Research Center",
        abbreviation: "GIRC",
        role: "Contributor",
        organizationType: "Research Center",
      }),
      organization({
        name: "Sequencing Core Facility",
        role: "Provider",
        organizationType: "Facility",
      }),
    ],
  },
} satisfies Story;

export const WithoutAbbreviation = {
  args: {
    organizations: [
      organization({
        name: "Japan Society for the Promotion of Science",
        url: "https://www.jsps.go.jp/",
        role: "Funder",
        organizationType: "Funding Agency",
      }),
      organization({
        name: "National Bioscience Database Center",
        url: "https://biosciencedbc.jp/",
        role: "Partner",
        organizationType: "Database Center",
      }),
    ],
  },
} satisfies Story;

export const MinimalNameOnly = {
  args: {
    organizations: [
      organization({
        name: "BioSample Submission Office",
      }),
      organization({
        name: "Genome Analysis Group",
      }),
    ],
  },
} satisfies Story;

export const MixedAvailability = {
  args: {
    organizations: [
      organization({
        name: "DNA Data Bank of Japan",
        abbreviation: "DDBJ",
        url: "https://www.ddbj.nig.ac.jp/",
        role: "Data Center",
        organizationType: "Institute",
      }),
      organization({
        name: "Collaborative Sequencing Laboratory",
        role: "Contributor",
      }),
      organization({
        abbreviation: "NIG",
        url: "https://www.nig.ac.jp/",
        organizationType: "Institute",
      }),
      organization({
        name: "National Center for Biotechnology Information",
        abbreviation: "NCBI",
        role: "Archive",
      }),
    ],
  },
} satisfies Story;
