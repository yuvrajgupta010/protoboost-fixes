import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.tsx";
import SignUp from "./SignUp.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import "./index.css";

// Custom theme with ProtoBoost colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#ab5c64",
      dark: "#96515a",
    },
    secondary: {
      main: "#21272e",
      dark: "#191e24",
    },
    background: {
      default: "#f4fafd",
      paper: "#ffffff",
    },
    text: {
      primary: "#21272e",
      secondary: "#9c9fa3",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.2s ease-in-out",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#ab5c64",
              borderWidth: "2px",
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#c6cace",
          "&.Mui-checked": {
            color: "#ab5c64",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<App />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/signin" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
