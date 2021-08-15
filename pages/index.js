import React from "react";
import localeData from "locale.json";
import { useTheme } from "@material-ui/core/styles";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Rockit from "public/rockit.svg";
import Image from "next/image";
import Hero from "../components/Home/hero";
import Features from "../components/Home/features";
import Cards from "../components/Home/cards";
import Demo from "../components/Home/demo";
import Started from "../components/Home/started";
function Home({ locale }) {
  var localedata = localeData[locale];
  const theme = useTheme();
  return (
    <div className="home" bgcolor={theme.palette.background.paper}>
      <Head>
        <title>Webbee | Techgater</title>
        <meta name="description" content="Almatar | Techgater" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero">
        <Box py={4}/>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12}>
              <Box py={12} />
              <Typography
                variant="h2"
                fontWeight={700}
                mb={3}
            color="textPrimary"
              >
                Turn your ideas <br/>into a <span>future.|</span>
              </Typography>
              <Typography
                variant="p"
                fontSize="20px"
                fontWeight={400}
                color="textSecondary"
                mb={3}
              >
                Webbee will make your product look modern and professional while
                saving you precious time.
              </Typography>
              <Box my={4}>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  sx={{ mr: "20px" }}
                >
                  Purchase now
                </Button>
                <Button color="primary" variant="outlined" size="large">
                  View documentation
                </Button>
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box py={10}>
                <Image src={Rockit} height={492} width={586} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Hero />
      <Features />
      <Cards />
      <Demo />
      <Started />
    </div>
  );
}

Home.getInitialProps = async ({ locale }) => {
  return { locale };
};

export default Home;
