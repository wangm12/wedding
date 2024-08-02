import { useLayoutEffect, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "./recoil";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, useLocation } from 'react-router-dom';
import MainMenu from "./components/menu/index";
import "./App.css";
import MainRouter from './routes';

function ThemeWrapper({ children }) {
  const themeState = useRecoilValue(themeAtom);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeState,
          secondary: {
            main: "#E0C2FF",
            light: "#F5EBFF",
            // dark: will be calculated from palette.secondary.main,
            contrastText: "#47008F",
          },
        },
      }),
    [themeState]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}

// make sure to scroll to top when navigating to a new page
const ScrollToTopWrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
};

function App() {
  return (
    <ThemeWrapper>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTopWrapper>
          <div id="root__container">
            <MainMenu />
            <MainRouter />
          </div>
        </ScrollToTopWrapper>
      </BrowserRouter>
    </ThemeWrapper>
  );
}

export default App;
