import * as React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ClearIcon from "@material-ui/icons/Clear";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box px={3}>
        <IconButton size="large" edge="start" sx={{ float: "right" }}>
          <ClearIcon />
        </IconButton>
        <Box pt={4} mb={2}>
          <Typography variant="h6" fontSize={15} fontWeight={700}>
            Landing Pages
          </Typography>
        </Box>
        <Grid container spacing={2}>
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
            <Grid item md={6} sm={12} key={text}>
              <Typography fontSize={14}>{text}</Typography>
            </Grid>
          ))}
        </Grid>
        <Box pt={4} mb={2}>
          <Typography variant="h6" fontSize={15} fontWeight={700}>
            Supporting Pages
          </Typography>
        </Box>
        <Grid container spacing={2}>
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
            <Grid item md={6} key={text}>
              <Typography fontSize={14}>{text}</Typography>
            </Grid>
          ))}
        </Grid>
        <Box pt={4} mb={2}>
          <Typography variant="h6" fontSize={15} fontWeight={700}>
            Supporting Pages
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {[
            "Login",
            "Login Simple",
            "Sign Up",
            "Sign Up Simple",
            "Forget Passward",
            "Forget Passward Simple",
          ].map((text) => (
            <Grid item md={6} key={text}>
              <Typography fontSize={14}>{text}</Typography>
            </Grid>
          ))}
        </Grid>
        <Box py={3} />
        <Button size="large" color="primary" variant="outlined" fullWidth>
          Documentation
        </Button>
        <Box py={1} />
        <Button color="primary" variant="contained" size="large" fullWidth>
          Purchase now
        </Button>
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
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
