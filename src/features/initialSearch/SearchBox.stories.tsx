import { expect, fn } from "storybook/test";
import { SearchBox } from "@/features/initialSearch/SearchBox.tsx";
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

const resetOnSearch = (onSearch: unknown) => {
  if (
    typeof onSearch === "function" &&
    "mockClear" in onSearch &&
    typeof onSearch.mockClear === "function"
  ) {
    onSearch.mockClear();
  }
};

export const Primary = {} satisfies Story;

export const MenuOpen: Story = {
  play: async ({ canvasElement, userEvent, step }) => {
    await step("open menu", async () => {
      const trigger = canvasElement.querySelector('[data-slot="trigger"]')!;
      await userEvent.click(trigger);
    });

    await step("show scroll container", async () => {
      const scrollShadow = canvasElement.ownerDocument.querySelector(".scroll-shadow");
      await expect(scrollShadow).toBeInTheDocument();
    });
  },
};

export const SearchAsBlank: Story = {
  play: async ({ args, userEvent, canvasElement, step }) => {
    resetOnSearch(args.onSearch);

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
    resetOnSearch(args.onSearch);

    await step("click types", async () => {
      const select = canvasElement.querySelector("select[multiple]")!;
      await userEvent.selectOptions(select, ["biosample", "bioproject"]);
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
    resetOnSearch(args.onSearch);

    await step("click types", async () => {
      const select = canvasElement.querySelector("select[multiple]")!;
      await userEvent.selectOptions(select, ["biosample", "bioproject"]);
      await userEvent.selectOptions(select, ["biosample", "bioproject", "all"]);
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
    resetOnSearch(args.onSearch);

    await step("click types", async () => {
      const select = canvasElement.querySelector("select[multiple]")!;
      await userEvent.selectOptions(select, ["biosample"]);
      await userEvent.selectOptions(select, ["all"]);
      await userEvent.selectOptions(select, ["all", "bioproject"]);
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
    resetOnSearch(args.onSearch);

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
