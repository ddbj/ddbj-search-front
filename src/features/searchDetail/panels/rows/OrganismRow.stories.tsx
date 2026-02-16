import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { OrganismRow } from "./OrganismRow.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: OrganismRow,
  args: {},
  decorators: [
    (Story) => {
      return (
        <PanelWrapper>
          <InfoList>
            <Story />
          </InfoList>
        </PanelWrapper>
      );
    },
  ],
} satisfies Meta<typeof OrganismRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Null = {
  args: {
    organism: null,
  },
} satisfies Story;

export const Primary = {
  args: {
    organism: {
      name: "Homo sapiens",
      identifier: "9606",
    },
  },
} satisfies Story;

// TODO: identifier が有効でないケース
// TODO: nameが存在していないケース
