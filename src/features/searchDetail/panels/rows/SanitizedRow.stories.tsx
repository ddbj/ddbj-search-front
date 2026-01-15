import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { SanitizedRow } from "./SanitizedRow.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: SanitizedRow,
  args: {
    term: "Description",
  },
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
} satisfies Meta<typeof SanitizedRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Null = {
  args: {
    value: null,
  },
};

export const Primary = {
  args: {
    value: "This is a description.",
  },
} satisfies Story;

export const WithHTML = {
  args: {
    value: "<p>This is a description with <b>HTML</b></p>",
  },
};
