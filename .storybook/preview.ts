import type { Preview } from "@storybook/react";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { csTheme, defaultTheme } from "../src/theme/";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      themes: {
        custom: csTheme,
        default: defaultTheme,
      },
      defaultTheme: "custom",
    }),
  ],
};

export default preview;
