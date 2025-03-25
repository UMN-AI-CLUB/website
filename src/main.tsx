import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/global.ts";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/themes/default.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ReactLenis>
  </StrictMode>
);
