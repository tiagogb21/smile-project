import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyles />
  </ThemeProvider>
);
