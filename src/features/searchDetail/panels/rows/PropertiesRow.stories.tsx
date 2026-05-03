import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, screen } from "storybook/test";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { PropertiesRow } from "./PropertiesRow.tsx";

const meta = {
  component: PropertiesRow,
  args: {
    data: bioproject1.properties,
  },
  decorators: [
    (Story) => (
      <PanelWrapper>
        <InfoList>
          <Story />
        </InfoList>
      </PanelWrapper>
    ),
  ],
} satisfies Meta<typeof PropertiesRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(await canvas.findByRole("button", { name: "Open Properties" }));
    await expect(await screen.findByRole("dialog", { name: "Properties" })).toBeInTheDocument();
    await expect(await screen.findByRole("button", { name: "Copy JSON" })).toBeInTheDocument();
  },
} satisfies Story;
