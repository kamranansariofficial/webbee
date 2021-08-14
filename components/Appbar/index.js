import * as React from "react";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Container, Paper } from "@material-ui/core";
import Image from "next/image";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import W from "public/w.svg";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { Mode } from "@material-ui/icons";

export default function ButtonAppBar({ selectedColor, onChangeMode }) {
  const [color, setcolor] = React.useState("pink");
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = useTheme();
  console.log(darkMode);
  return (
    <div className="appbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="inherit">
          <Container fixed>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "#969da1" }}
              >
                <MenuIcon />
              </IconButton>
              <Image src={W} height={40} width={40} />
              {/* bgcolor={theme.palette.primary.main} */}
              <Box ml="auto">
                {["green", "blue", "purple", "pink", "yellow"].map((v) => (
                  <Fab
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
                <IconButton
                  onClick={() => {
                    setDarkMode(!darkMode);
                    onChangeMode(!darkMode);
                  }}
                  color="primary"
                >
                  {darkMode ? <NightsStayOutlinedIcon /> : <WbSunnyIcon />}
                </IconButton>
                <Button sx={{ color: "#969da1" }} size="large">
                  Home
                </Button>
                <Button sx={{ color: "#969da1" }} size="large">
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
