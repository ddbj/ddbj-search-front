import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import type { BaseFacetListResponse } from "@/api/facets/base.ts";
import { sleep } from "@/lib/storybook/sleep.ts";
import { OrganismSelector } from "@/views/searchResult/components/queryBuilder/controls/OrganismSelector.tsx";

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

const manyOrganismItems = Array.from({ length: 100 }, (_, index) => {
  const number = index + 1;
  return {
    value: String(100000 + number),
    count: 10000 - index,
    label: `Organism species ${String(number).padStart(3, "0")}`,
  };
});

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

const waitForDebounce = () => sleep(300);

export const Primary = {} satisfies Story;

export const TaxIdInput = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateOrganism.mockReset();
    const input = await canvas.findByRole("textbox", { name: "Organism" });

    await userEvent.type(input, "562");

    await expect(input).toHaveValue("562");
    await expect(
      await canvas.findByRole("checkbox", { name: "Escherichia coli (1,232,567)" }),
    ).toBeChecked();
    await expect(
      await canvas.findByRole("checkbox", { name: "Homo sapiens (987,654)" }),
    ).toBeVisible();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(0);
    await waitForDebounce();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(1);
    await expect(mockUpdateOrganism).toHaveBeenLastCalledWith("562");
  },
} satisfies Story;

export const RawTaxIdInput = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateOrganism.mockReset();
    const input = await canvas.findByRole("textbox", { name: "Organism" });

    await userEvent.type(input, " 562 ");

    await expect(input).toHaveValue(" 562 ");
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(0);
    await waitForDebounce();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(1);
    await expect(mockUpdateOrganism).toHaveBeenLastCalledWith(" 562 ");
  },
} satisfies Story;

export const NonNumericTaxIdInput = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateOrganism.mockReset();
    const input = await canvas.findByRole("textbox", { name: "Organism" });

    await userEvent.type(input, "abc");

    await expect(input).toHaveValue("abc");
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(0);
    await waitForDebounce();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(1);
    await expect(mockUpdateOrganism).toHaveBeenLastCalledWith("abc");
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

export const ManyItems = {
  args: {
    items: manyOrganismItems,
  },
  play: async ({ canvas }) => {
    const list = await canvas.findByTestId("organism-option-list");

    await expect(
      await canvas.findByRole("checkbox", { name: "Organism species 001 (10,000)" }),
    ).toBeVisible();
    await expect(list).toBeVisible();
    await expect(list.clientHeight).toBeLessThanOrEqual(300);
    await expect(list.scrollHeight).toBeGreaterThan(list.clientHeight);
  },
} satisfies Story;

export const ToggleSelection = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateOrganism.mockReset();
    const input = await canvas.findByRole("textbox", { name: "Organism" });
    const checkbox = await canvas.findByRole("checkbox", {
      name: "Escherichia coli (1,232,567)",
    });

    await userEvent.click(checkbox);

    await expect(input).toHaveValue("562");
    await expect(checkbox).toBeChecked();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(0);
    await waitForDebounce();
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
    const input = await canvas.findByRole("textbox", { name: "Organism" });
    const checkbox = await canvas.findByRole("checkbox", {
      name: "Escherichia coli (1,232,567)",
    });

    await userEvent.click(checkbox);

    await expect(input).toHaveValue("");
    await expect(checkbox).not.toBeChecked();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(0);
    await waitForDebounce();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(1);
    await expect(mockUpdateOrganism).toHaveBeenLastCalledWith(null);
  },
} satisfies Story;

export const ClearTaxIdInput = {
  args: {
    value: "562",
  },
  play: async ({ canvas, userEvent }) => {
    mockUpdateOrganism.mockReset();
    const input = await canvas.findByRole("textbox", { name: "Organism" });
    const checkbox = await canvas.findByRole("checkbox", {
      name: "Escherichia coli (1,232,567)",
    });

    await expect(input).toHaveValue("562");
    await expect(checkbox).toBeChecked();
    await userEvent.clear(input);

    await expect(input).toHaveValue("");
    await expect(checkbox).not.toBeChecked();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(0);
    await waitForDebounce();
    await expect(mockUpdateOrganism).toHaveBeenCalledTimes(1);
    await expect(mockUpdateOrganism).toHaveBeenLastCalledWith(null);
  },
} satisfies Story;
