import * as React from "react";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Container } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Darwer from "components/Appbar/Drawer";

export default function ButtonAppBar({ selectedColor, onChangeMode }) {
  const [color, setcolor] = React.useState("green");
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = useTheme();
  return (
    <div className="appbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ bgcolor: theme.palette.background.paper }}
        >
          <Container fixed>
            <Toolbar>
              <Darwer />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45px"
                height="32px"
                fill="none"
                viewBox="0 0 95 71"
              >
                <rect
                  width="16.811"
                  height="68.926"
                  x="0.664"
                  y="7.769"
                  fill={theme.palette.primary.main}
                  stroke={theme.palette.primary.main}
                  rx="8.406"
                  transform="rotate(-25 .664 7.77)"
                ></rect>
                <rect
                  width="16.811"
                  height="68.926"
                  x="28.665"
                  y="7.769"
                  fill={theme.palette.primary.main}
                  stroke={theme.palette.primary.main}
                  rx="8.406"
                  transform="rotate(-25 28.665 7.77)"
                ></rect>
                <rect
                  width="16.811"
                  height="16.81"
                  x="78.769"
                  y="0.664"
                  fill={theme.palette.primary.main}
                  stroke={theme.palette.primary.main}
                  rx="8.405"
                  transform="rotate(25 78.77 .664)"
                ></rect>
              </svg>
              {/* bgcolor={theme.palette.primary.main} */}
              <Box ml="auto">
                <Box
                  bgcolor={theme.palette.background.default}
                  component="span"
                  pl={1}
                  pr={0}
                  pt={1}
                  pb={1.2}
                  borderRadius="32px"
                >
                  {["green", "blue", "purple", "pink", "yellow"].map((v) => (
                    <Fab
                      key={Math.random()}
                      onClick={() => {
                        setcolor(v);
                        selectedColor(v);
                      }}
                      size="small"
                      className={`fab ${v}`}
                    >
                      {color === v && <CheckIcon />}
                    </Fab>
                  ))}
                </Box>
                <IconButton
                  onClick={() => {
                    setDarkMode(!darkMode);
                    onChangeMode(!darkMode);
                  }}
                  color="primary"
                >
                  {!darkMode ? <NightsStayOutlinedIcon /> : <WbSunnyIcon />}
                </IconButton>
                <Button sx={{ color: theme.palette.text.primary }} size="large">
                  Home
                </Button>
                <Button sx={{ color: theme.palette.text.primary }} size="large">
                  Documentation
                </Button>
                <Button
                  id="button"
                  color="primary"
                  variant="contained"
                  size="large"
                >
                  Purchase now
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
}
