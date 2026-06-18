import type { Meta, StoryObj } from "@storybook/react-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { expect, fn } from "storybook/test";
import type { BioProjectFacetListResponse } from "@/api/facets/bioProject.ts";
import type { BioProjectObjectType } from "@/api/valueTypes.ts";
import { sleep } from "@/lib/storybook/sleep.ts";
import { ObjectTypeSelector } from "./ObjectTypeSelector.tsx";

const mockUpdateObjectTypes = fn((_value: BioProjectObjectType[]) => {});
const facetData: BioProjectFacetListResponse = {
  facets: {
    type: null,
    organism: null,
    accessibility: null,
    objectType: [
      { value: "BioProject", count: 900 },
      { value: "UmbrellaBioProject", count: 100 },
    ],
  },
};

const makeQueryClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  queryClient.setQueryData(["fetchBioProjectFacets", "objectType"], facetData);
  return queryClient;
};

const meta = {
  component: ObjectTypeSelector,
  args: {
    value: [],
    params: {},
    update: mockUpdateObjectTypes,
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={makeQueryClient()}>
        <div className="w-[384px] p-4">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof ObjectTypeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const ToggleObjectType = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateObjectTypes.mockReset();
    await expect(await canvas.findByRole("checkbox", { name: "BioProject (900)" })).toBeEnabled();
    const umbrellaCheckbox = await canvas.findByRole("checkbox", {
      name: "Umbrella BioProject (100)",
    });

    await userEvent.click(umbrellaCheckbox);
    await expect(mockUpdateObjectTypes).toBeCalledTimes(0);
    await sleep(300);
    await expect(mockUpdateObjectTypes).toBeCalledTimes(1);
    await expect(mockUpdateObjectTypes).toHaveBeenLastCalledWith(["UmbrellaBioProject"]);
  },
} satisfies Story;
