import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Landing from "../Home/landing";
import Supporting from "../Home/supporting";
import Auth from "../Home/auth";
import { useTheme } from "@material-ui/core/styles";
export default function demo() {
  const theme = useTheme();
  return (
    <Box>
      <Container>
        <Box className="demo" textAlign="center" pt={8}>
          <Typography
            variant="p"
            fontWeight={500}
            color="textPrimary"
            sx={{ textTransform: "uppercase" }}
          >
            Demo pages
          </Typography>
          <Typography variant="h3" fontWeight={700} mb={2} color="textPrimary">
            Webbee in action
          </Typography>
          <Typography
            variant="p"
            fontWeight={500}
            fontSize="20px"
            color="textSecondary"
          >
            All examples you find below are included in the download package.
          </Typography>
          <Box my={4}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              sx={{ mr: "20px" }}
            >
              Purchase now
              <ArrowRightAltIcon />
            </Button>
            <Button color="primary" variant="outlined" size="large">
              View documentation
            </Button>
          </Box>
        </Box>
        <Landing />
        <Supporting />
        <Auth />
      </Container>
    </Box>
  );
}
