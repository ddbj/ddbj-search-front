import * as TanstackRouter from "@tanstack/react-router";
import { expect, fn, spyOn, userEvent, within } from "storybook/test";
import { HomePage } from "@/components/pages/HomePage.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const mockedNavigate = fn();

const meta = {
  component: HomePage,
  decorators: [
    (Story) => {
      // 3. "storybook/test" の `spyOn` を使用してフックをモックします。
      spyOn(TanstackRouter, "useNavigate");
      return <Story />;
    },
  ],
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary = {} satisfies Story;
