import { GlobalStyles } from "../src/globals/global-styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  (Story) => {
    return (
      <>
        <Story />
      </>
    );
  }
];
