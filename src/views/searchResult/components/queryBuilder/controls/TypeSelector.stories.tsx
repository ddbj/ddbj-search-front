import type { Meta, StoryObj } from "@storybook/react-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { expect, fn } from "storybook/test";
import type { AllFacetListResponse } from "@/api/facets/all.ts";
import type { DBType } from "@/consts/db.ts";
import { sleep } from "@/lib/storybook/sleep.ts";
import { TypeSelector } from "@/views/searchResult/components/queryBuilder/controls/TypeSelector.tsx";

const mockUpdateTypes = fn((_v: DBType[]) => {});
const facetData: AllFacetListResponse = {
  facets: {
    type: [
      {
        value: "bioproject",
        count: 100,
      },
    ],
    organism: null,
    accessibility: null,
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
  queryClient.setQueryData(["fetchAllFacets", "type"], facetData);
  return queryClient;
};

const meta = {
  component: TypeSelector,
  args: {
    value: [],
    params: {},
    update: mockUpdateTypes,
    linkSearchParams: {},
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
} satisfies Meta<typeof TypeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const ToggleType = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateTypes.mockReset();
    const checkbox = await canvas.findByRole("checkbox", { name: "BioProject (100)" });
    const link = await canvas.findByRole("link", { name: "BioProject (100)" });

    await expect(link).toHaveAttribute("href", expect.stringContaining("/entry/bioproject"));
    await userEvent.click(checkbox);
    await expect(mockUpdateTypes).toBeCalledTimes(0);
    await sleep(300);
    await expect(mockUpdateTypes).toBeCalledTimes(1);
    await expect(mockUpdateTypes).toHaveBeenLastCalledWith(["bioproject"]);
  },
} satisfies Story;
