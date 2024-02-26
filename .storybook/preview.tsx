import type { Preview } from "@storybook/react";
import { AppIntlProvider } from "../src/providers/AppIntlProvider";
import "../src/styles/globals.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <AppIntlProvider>
          <Story />
        </AppIntlProvider>
      );
    },
  ],
};

export default preview;
