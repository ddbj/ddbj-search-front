import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import type { BaseFacetListResponse } from "@/api/facets/base.ts";
import { OrganismSelector } from "@/features/searchResult/queryBuilder/controls/OrganismSelector.tsx";
import { sleep } from "@/utils/sleep.ts";

const mockUpdateOrganism = fn((_organism: string | null) => {});

const facetData: BaseFacetListResponse = {
  facets: {
    type: null,
    organism: [
      { value: "562", count: 1232567, label: "Escherichia coli" },
      { value: "9606", count: 987654, label: "Homo sapiens" },
      { value: "3702", count: 1200, label: "Arabidopsis thaliana" },
      { value: "4932", count: 908, label: "Saccharomyces cerevisiae" },
    ],
    accessibility: null,
  },
};

const fallbackLabelFacetData: BaseFacetListResponse = {
  facets: {
    type: null,
    organism: [
      { value: "562", count: 1232567, label: "Escherichia coli" },
      { value: "10090", count: 45678 },
    ],
    accessibility: null,
  },
};

const meta = {
  component: OrganismSelector,
  args: {
    value: null,
    items: facetData.facets.organism ?? [],
    update: mockUpdateOrganism,
  },
  decorators: [
    (Story) => (
      <div className="w-[384px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OrganismSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const Filtered = {
  play: async ({ canvas, userEvent }) => {
    const input = await canvas.findByRole("textbox", { name: "Organism" });

    await userEvent.type(input, "coli");

    await expect(
      await canvas.findByRole("checkbox", { name: "Escherichia coli (1,232,567)" }),
    ).toBeVisible();
    await expect(canvas.queryByRole("checkbox", { name: "Homo sapiens (987,654)" })).toBeNull();
  },
} satisfies Story;

export const Selected = {
  args: {
    value: "562",
  },
} satisfies Story;

export const LabelFallback = {
  args: {
    items: fallbackLabelFacetData.facets.organism ?? [],
  },
} satisfies Story;

export const ToggleSelection = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateOrganism.mockReset();
    const checkbox = await canvas.findByRole("checkbox", {
      name: "Escherichia coli (1,232,567)",
    });

    await userEvent.click(checkbox);

    await expect(checkbox).toBeChecked();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(0);
    await sleep(300);
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(1);
    await expect(mockUpdateOrganism).toHaveBeenLastCalledWith("562");
  },
} satisfies Story;

export const ClearSelection = {
  args: {
    value: "562",
  },
  play: async ({ canvas, userEvent }) => {
    mockUpdateOrganism.mockReset();
    const checkbox = await canvas.findByRole("checkbox", {
      name: "Escherichia coli (1,232,567)",
    });

    await userEvent.click(checkbox);

    await expect(checkbox).not.toBeChecked();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(0);
    await sleep(300);
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(1);
    await expect(mockUpdateOrganism).toHaveBeenLastCalledWith(null);
  },
} satisfies Story;

export const ClearSelectedWhenFilteredOut = {
  args: {
    value: "562",
  },
  play: async ({ canvas, userEvent }) => {
    mockUpdateOrganism.mockReset();
    const input = await canvas.findByRole("textbox", { name: "Organism" });
    const selectedCheckbox = await canvas.findByRole("checkbox", {
      name: "Escherichia coli (1,232,567)",
    });

    await expect(selectedCheckbox).toBeChecked();
    await userEvent.type(input, "Homo");

    await expect(
      canvas.queryByRole("checkbox", { name: "Escherichia coli (1,232,567)" }),
    ).toBeNull();
    await expect(
      await canvas.findByRole("checkbox", { name: "Homo sapiens (987,654)" }),
    ).not.toBeChecked();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(0);
    await sleep(300);
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(1);
    await expect(mockUpdateOrganism).toHaveBeenLastCalledWith(null);

    await userEvent.clear(input);

    await expect(
      await canvas.findByRole("checkbox", { name: "Escherichia coli (1,232,567)" }),
    ).not.toBeChecked();
  },
} satisfies Story;
