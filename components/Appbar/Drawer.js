import * as React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import { useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ClearIcon from "@material-ui/icons/Clear";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
export default function TemporaryDrawer() {
  const theme = useTheme();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    active: "",
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: 400 }} role="presentation">
      <Box px={3}>
        <IconButton
          onClick={toggleDrawer(anchor, false)}
          size="medium"
          edge="start"
          sx={{ float: "right", mr: -2, mt: 1 }}
        >
          <ClearIcon />
        </IconButton>
        <Box pt={4} mb={1}>
          <Typography variant="h6" mt={1.6} fontSize={15} fontWeight={700}>
            Landing Pages
          </Typography>
        </Box>
        <Grid container spacing={1}>
          {[
            "Advertisment",
            "Payment App",
            "Marketing",
            "Software Company",
            "Course",
            "Crypto Currancy",
            "Design Anency",
            "consulting",
            "Appliction",
            "Domain Hosting",
            "Travel",
            "Event",
          ].map((text) => (
            <Grid item md={6} sm={12} xs={12} key={text}>
              <Link
                href="/"
                onMouseOver={() => setState({ ...state, active: text })}
                onMouseOut={() => setState({ ...state, active: "" })}
                style={{ color: state.active === text ? theme.palette.primary.main : theme.palette.text.primary }}
                onClick={toggleDrawer(anchor, false)}
                fontSize={14}
              >
                {text}
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box pt={3} mb={1}>
          <Typography variant="h6" fontSize={15} fontWeight={700}>
            Supporting Pages
          </Typography>
        </Box>
        <Grid container spacing={1}>
          {[
            "About",
            "Services",
            "Contact",
            "Pricing",
            "Customer",
            "Hire Us",
            "FAQ",
            "Privacy Policy",
            "Coming Soon",
            "Maintenance Mode",
            "Cover",
            "Not Found",
          ].map((text) => (
            <Grid item md={6} sm={12} xs={12} key={text}>
              <Link
                onClick={toggleDrawer(anchor, false)}
                onMouseOver={() => setState({ ...state, active: text })}
                onMouseOut={() => setState({ ...state, active: "" })}
                style={{ color: state.active === text ? theme.palette.primary.main : theme.palette.text.primary }}
                fontSize={14}
                href="/"
              >
                {text}
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box pt={2} mb={1}>
          <Typography variant="h6" fontSize={15} fontWeight={700}>
            Supporting Pages
          </Typography>
        </Box>
        <Grid container spacing={1}>
          {[
            "Login",
            "Login Simple",
            "Sign Up",
            "Sign Up Simple",
            "Forget Passward",
            "Forget Passward Simple",
          ].map((text) => (
            <Grid item md={6} sm={12} xs={12} key={text}>
              <Link
                href="/"
                onClick={toggleDrawer(anchor, false)}
                onMouseOver={() => setState({ ...state, active: text })}
                onMouseOut={() => setState({ ...state, active: "" })}
                style={{ color: state.active === text ? theme.palette.primary.main : theme.palette.text.primary }}
                fontSize={14}
              >
                {text}
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box py={2} />
        <Button size="large" color="primary" variant="outlined" fullWidth>
          Documentation
        </Button>
        <Box py={1}>
          <Button color="primary" variant="contained" size="large" fullWidth>
            Purchase now
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer onClose={toggleDrawer(anchor, false)} anchor={anchor} open={state[anchor]}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
