import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { DateSelectors } from "@/views/searchResult/components/queryBuilder/controls/DateSelectors.tsx";

const StatefulDateSelectors = ({
  modified: initialModified,
  published: initialPublished,
}: {
  published: string;
  modified: string;
}) => {
  const [published, setPublished] = useState(initialPublished);
  const [modified, setModified] = useState(initialModified);

  useEffect(() => {
    setPublished(initialPublished);
  }, [initialPublished]);

  useEffect(() => {
    setModified(initialModified);
  }, [initialModified]);

  return (
    <DateSelectors
      published={published}
      modified={modified}
      changePublished={setPublished}
      changeModified={setModified}
    />
  );
};

const meta = {
  component: DateSelectors,
  args: {
    published: "",
    modified: "",
    changePublished: (_v: string) => {},
    changeModified: (_v: string) => {},
  },
  render: (args) => <StatefulDateSelectors published={args.published} modified={args.modified} />,
  decorators: [
    (Story) => (
      <div className="w-[320px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DateSelectors>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const WithSelectedRanges = {
  args: {
    published: "2024-01-01,2024-01-31",
    modified: "2024-02-01,2024-02-15",
  },
} satisfies Story;
