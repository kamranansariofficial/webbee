import * as React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "styles/globals.scss";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { createTheme } from "@material-ui/core/styles";

const Layout = dynamic(() => import("Layouts"));

const cache = createCache({ key: "muirtl", stylisPlugins: [rtlPlugin] });
const cacheLtr = createCache({ key: "css" });
cache.compat = true;
// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

const jssLtr = create({
  plugins: [],
});

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [state, setstate] = React.useState({
    selected: "rgb(56, 142, 60)",
    darkMode: false,
  });
  const checkColor = (v) => {
    switch (v) {
      case "green":
        return "rgb(56, 142, 60)";
      case "blue":
        return "rgb(26, 118, 210)";
      case "yellow":
        return "rgb(242, 102, 0)";
      case "purple":
        return "rgb(48, 63, 159)";
      default:
        return "rgb(194, 24, 92)";
      // code block
    }
  };
  // Create a theme instance.
  const theme = createTheme({
    palette: {
      primary: {
        main: state.selected,
      },
      secondary: {
        main: "#272d59",
      },
      background: {
        paper: state.darkMode ? "rgb(34, 43, 69)" : "#ffffff",
        default: state.darkMode ? "rgb(26, 33, 56)" : "#F7F9FC",
      },
      text: {
        primary: state.darkMode ? "#ffffff" : "#2D3748",
        secondary: "#969da1",
      },
      mode: state.darkMode ? "dark" : "light",
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      button: {
        fontFamily: ["Roboto", "DroidKufi-Regular"].join(","),
      },
    },
  });

  return (
    <CacheProvider value={props.router.locale === "ar" ? cache : cacheLtr}>
      <Head>
        <title>Almatar | Techgater</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StylesProvider jss={props.router.locale === "ar" ? jss : jssLtr}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout
            selectedColor={(v) =>
              setstate({ ...state, selected: checkColor(v) })
            }
            locale={props.router.locale}
            onChangeMode={(v) => setstate({ ...state, darkMode: v })}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StylesProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
