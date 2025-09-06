import "jest-extended";
import { expect, fn } from "storybook/test";
import { SearchBox } from "@/features/initialSearch/SearchBox.tsx";
import { findByListValue, findBySlot } from "@/utils/storybook.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: SearchBox,
  args: {
    onSearch: fn(),
  },
  decorators: [
    (Story) => (
      <div className="w-4xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

const getOnSearchArgs = (onSearchArgs: unknown[] | undefined) => {
  const onSearchTypes = onSearchArgs?.[0] as string[];
  const onSearchQueries = onSearchArgs?.[1] as string[];
  return { onSearchTypes, onSearchQueries };
};

export const Primary = {} satisfies Story;

export const SearchAsBlank: Story = {
  play: async ({ args, userEvent, canvasElement, step }) => {
    //
    await step("click button", async () => {
      const button = canvasElement.querySelector("button#searchButton")!;
      await userEvent.click(button);
      const { onSearchTypes } = getOnSearchArgs(args.onSearch?.mock.lastCall);
      expect(onSearchTypes.sort()).toEqual([].sort());
    });
  },
};

export const searchWith: Story = {
  play: async ({ args, userEvent, canvasElement, step }) => {
    //
    await step("click trigger", async () => {
      const trigger = await findBySlot("trigger");
      await userEvent.click(trigger);
    });

    await step("click types", async () => {
      const bioSample = await findByListValue("biosample");
      const bioProject = await findByListValue("bioproject");
      await userEvent.click(bioSample);
      await userEvent.click(bioProject);
    });

    await step("click button", async () => {
      const button = canvasElement.querySelector("button#searchButton")!;
      await userEvent.click(button);
      const { onSearchTypes } = getOnSearchArgs(args.onSearch?.mock.lastCall);
      expect(onSearchTypes.sort()).toEqual(["bioproject", "biosample"].sort());
    });
  },
};

export const overwriteWithAll: Story = {
  play: async ({ args, userEvent, canvasElement, step }) => {
    //
    await step("click trigger", async () => {
      const trigger = await findBySlot("trigger");
      await userEvent.click(trigger);
    });

    await step("click types", async () => {
      const all = await findByListValue("all");
      const bioSample = await findByListValue("biosample");
      const bioProject = await findByListValue("bioproject");
      await userEvent.click(bioSample);
      await userEvent.click(bioProject);
      await userEvent.click(all);
    });

    await step("click button", async () => {
      const button = canvasElement.querySelector("button#searchButton")!;
      await userEvent.click(button);
      const { onSearchTypes } = getOnSearchArgs(args.onSearch?.mock.lastCall);
      expect(onSearchTypes.sort()).toEqual([].sort());
    });
  },
};

export const overwriteAll: Story = {
  play: async ({ args, userEvent, canvasElement, step }) => {
    //
    await step("click trigger", async () => {
      const trigger = await findBySlot("trigger");
      await userEvent.click(trigger);
    });

    await step("click types", async () => {
      const all = await findByListValue("all");
      const bioSample = await findByListValue("biosample");
      const bioProject = await findByListValue("bioproject");
      await userEvent.click(bioSample);
      await userEvent.click(all);
      await userEvent.click(bioProject);
    });

    await step("click button", async () => {
      const button = canvasElement.querySelector("button#searchButton")!;
      await userEvent.click(button);
      const { onSearchTypes } = getOnSearchArgs(args.onSearch?.mock.lastCall);
      expect(onSearchTypes.sort()).toEqual(["bioproject"].sort());
    });
  },
};

// export const SingleTypeQuery: Story = {
//   play: async ({ args, userEvent, canvas, step, canvasElement }) => {
//     await step("click trigger", async () => {
//       const trigger = await findBySlot("trigger");
//       await userEvent.click(trigger);
//     });
//     await step("inputQuery", async () => {
//       const bioSample = await findByListValue("biosample");
//       const button = canvasElement.querySelector("button#searchButton")!;
//       await userEvent.click(bioSample);
//       await userEvent.click(button);
//       const { onSearchTypes, onSearchQueries } = getOnSearchArgs(args.onSearch?.mock.lastCall);
//       expect(onSearchTypes.sort()).toEqual(["biosample"].sort());
//       expect(onSearchQueries).toEqual([""]);
//     });
//   },
// };

export const inputQuery: Story = {
  play: async ({ args, userEvent, canvas, step }) => {
    await step("inputQuery", async () => {
      const input = await canvas.findByTestId("queryInput");
      await userEvent.type(input, "foo, hoge");
      await userEvent.type(input, "{enter}");
      const { onSearchTypes, onSearchQueries } = getOnSearchArgs(args.onSearch?.mock.lastCall);
      expect(onSearchTypes.sort()).toEqual([].sort());
      expect(onSearchQueries).toEqual(["foo", "hoge"]);
    });
  },
};
