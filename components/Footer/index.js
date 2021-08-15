import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
export default function index() {
  const theme = useTheme();
  return (
    <div className="footer">
      <Container>
        <Box mt={4} />
        <Toolbar className="toolbar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="24px"
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
          <Box ml="auto">
            <Button color="inherit" size="medium">
              Home
            </Button>
            <Button color="inherit" size="medium">
              Documentation
            </Button>
            <Button color="primary" variant="outlined" size="medium">
              Purchase now
            </Button>
          </Box>
        </Toolbar>
        <Box textAlign="center" mb={3}>
          <Typography
            variant="h6"
            fontSize={14}
            fontWeight={500}
            color="textPrimary"
          >
            © Webbee. 2021, Maccarian. All rights reserved
          </Typography>
          <Typography
            variant="p"
            fontWeight={400}
            fontSize={13}
            color="textSecondary"
          >
            When you visit or interact with our sites, services or tools, we or
            our authorised service providers may use cookies for storing
            information to help provide you with a better, faster and safer
            experience and for marketing purposes.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
