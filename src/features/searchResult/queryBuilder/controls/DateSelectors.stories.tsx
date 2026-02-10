import { useState } from "react";
import { DateSelectors } from "@/features/searchResult/queryBuilder/controls/DateSelectors.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DateSelectors,
  args: {
    published: "",
    modified: "",
    changePublished: (v: string) => {},
    changeModified: (v: string) => {},
  },
  decorators: [],
} satisfies Meta<typeof DateSelectors>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  decorators: [
    (Story) => {
      const [published, setPublished] = useState("");
      const [modified, setChangeModified] = useState("");
      const changePublished = (v: string) => {
        setPublished(v);
      };
      const changeModified = (v: string) => {
        setChangeModified(v);
      };
      return (
        <Story
          args={{
            published,
            modified,
            changePublished,
            changeModified,
          }}
        />
      );
    },
  ],
} satisfies Story;
