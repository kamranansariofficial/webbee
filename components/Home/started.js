import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Divider } from "@material-ui/core";
function features() {
  return (
    <div className="features">
      <Container fixed>
        <Box textAlign="center" py={8}>
          <Typography
            variant="p"
            fontWeight={500}
            sx={{ color: "rgb(100, 110, 115)" }}
          >
           Get started
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            mb={2}
            sx={{ color: "rgb(45, 55, 72)" }}
          >
            Get started with Webbee today
          </Typography>
          <Typography
            variant="p"
            fontWeight={500}
            fontSize="20px"
            sx={{ color: "rgb(100, 110, 115)" }}
          >
            Build a beautiful, modern website with flexible, fully customizable, atomic Material-UI components.
          </Typography>
          <Box mt={3}>
            <Button color="primary" variant="contained" size="large">
              Purchase now
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Box>
      </Container>
      <Divider/>
    </div>
  );
}

export default features;
