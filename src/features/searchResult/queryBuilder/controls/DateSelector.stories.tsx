import { useState } from "react";
import { DateSelector } from "@/features/searchResult/queryBuilder/controls/DateSelector.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DateSelector,
  args: {
    published: "",
    updated: "",
    changePublished: (v: string) => {},
    changeUpdated: (v: string) => {},
  },
  decorators: [],
} satisfies Meta<typeof DateSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  decorators: [
    (Story) => {
      const [published, setPublished] = useState("");
      const [updated, setUpdated] = useState("");
      const changePublished = (v: string) => {
        setPublished(v);
      };
      const changeUpdated = (v: string) => {
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
