import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";
import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
  <ThemeProvider theme={theme}>
    <App /> 
    <CssBaseline />
  </ThemeProvider>
</React.StrictMode>
)