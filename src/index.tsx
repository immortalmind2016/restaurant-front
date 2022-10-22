import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import {
  ChakraProvider,
  ComponentStyleConfig,
  defineStyleConfig,
  extendTheme,
  VStack,
} from "@chakra-ui/react";

const Switch = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    bg: "red",
    backgroundColor: "red",
    colorScheme: "red",
  },
  // Two sizes: sm and md
  variants: {
    test: {
      colorScheme: "red",
    },
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  defaultProps: {
    variant: "test",
  },
  // Two variants: outline and solid

  // The default size and variant values
});
const container = document.getElementById("root")!;
const root = createRoot(container);
const theme = extendTheme({
  components: {
    Switch: Switch,
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
