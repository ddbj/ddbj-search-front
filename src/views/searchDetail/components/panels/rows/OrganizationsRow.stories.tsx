import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import type { Organization } from "@/schema/api/detail/base.ts";
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
      }),
      organization({
        name: "DNA Data Bank of Japan",
        abbreviation: "DDBJ",
        url: "https://www.ddbj.nig.ac.jp/",
      }),
    ],
  },
} satisfies Story;

export const IgnoresRoleAndType = {
  args: {
    organizations: [
      organization({
        name: "National Center for Biotechnology Information",
        abbreviation: "NCBI",
        url: "https://www.ncbi.nlm.nih.gov/",
        role: "Archive",
        organizationType: "Database Center",
      }),
      organization({
        name: "European Bioinformatics Institute",
        abbreviation: "EBI",
        url: "https://www.ebi.ac.uk/",
        role: "Partner",
        organizationType: "Institute",
      }),
    ],
  },
  play: async ({ canvas }) => {
    await expect(
      await canvas.findByRole("link", { name: "National Center for Biotechnology Information" }),
    ).toBeInTheDocument();
    await expect(
      await canvas.findByRole("link", { name: "European Bioinformatics Institute" }),
    ).toBeInTheDocument();
    await expect(
      canvas.queryByText("Role: Archive / Type: Database Center"),
    ).not.toBeInTheDocument();
    await expect(canvas.queryByText("Role: Partner / Type: Institute")).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithoutUrl = {
  args: {
    organizations: [
      organization({
        name: "Genome Information Research Center",
        abbreviation: "GIRC",
      }),
      organization({
        name: "Sequencing Core Facility",
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
      }),
      organization({
        name: "National Bioscience Database Center",
        url: "https://biosciencedbc.jp/",
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
      }),
      organization({
        name: "Collaborative Sequencing Laboratory",
      }),
      organization({
        abbreviation: "NIG",
        url: "https://www.nig.ac.jp/",
      }),
      organization({
        name: "National Center for Biotechnology Information",
        abbreviation: "NCBI",
      }),
    ],
  },
} satisfies Story;
