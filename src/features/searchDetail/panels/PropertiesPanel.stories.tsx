import type { Meta, StoryObj } from "@storybook/react-vite";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { bioproject2 } from "@/msw/data/bioproject2.ts";
import { PropertiesPanel } from "./PropertiesPanel.tsx";

const largeProperties = Object.fromEntries(
  Array.from({ length: 10_050 }, (_, index) => [
    `field_${String(index).padStart(5, "0")}`,
    `value-${index}`,
  ]),
);

const meta = {
  component: PropertiesPanel,
  args: {
    data: bioproject1.properties,
  },
  decorators: [
    (Story) => (
      <div className="max-w-5xl p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PropertiesPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const CompactDataset = {
  args: {
    data: bioproject2.properties,
  },
} satisfies Story;

export const LargePayloadFallback = {
  args: {
    data: largeProperties,
  },
} satisfies Story;
