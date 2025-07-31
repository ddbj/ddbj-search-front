import { useState } from "react";
import { DateSelector } from "@/features/searchResult/organisms/DateSelector.tsx";
import type { DateRange } from "@/utils/date.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DateSelector,
  args: {
    published: null,
    updated: null,
    changePublished: (v: DateRange | null) => {},
    changeUpdated: (v: DateRange | null) => {},
  },
  decorators: [],
} satisfies Meta<typeof DateSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  decorators: [
    (Story) => {
      const [published, setPublished] = useState<DateRange | null>(null);
      const [updated, setUpdated] = useState<DateRange | null>(null);
      const changePublished = (v: DateRange | null) => {
        setPublished(v);
      };
      const changeUpdated = (v: DateRange | null) => {
        setUpdated(v);
      };
      return (
        <Story
          args={{
            published,
            updated,
            changePublished,
            changeUpdated,
          }}
        />
      );
    },
  ],
} satisfies Story;
