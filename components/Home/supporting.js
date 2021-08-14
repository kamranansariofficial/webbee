import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
export default function landing() {
  const gridData = [
    {
      heading: "About",
      paragraph: "About page",
    },
    {
      heading: "Services App",
      paragraph: "Services page",
    },
    {
      heading: "Contact",
      paragraph: "Contact page",
    },
    {
      heading: "Pricing",
      paragraph: "Pricing page",
    },
    {
      heading: "Customers",
      paragraph: "Customers page",
    },
    {
      heading: "Hire Us",
      paragraph: "Hire Us page",
    },
    {
      heading: "FAQ",
      paragraph: "FAQ page",
    },
    {
      heading: "Privacy POlicy",
      paragraph: "Privacy POlicy page",
    },
    {
      heading: "Comming Soon",
      paragraph: "Comming Soon page",
    },
    {
      heading: "Maintanances Mode",
      paragraph: "Maintanances Mode page",
    },
    {
      heading: "Cover",
      paragraph: "Cover page",
    },
    {
      heading: "Not Found",
      paragraph: "Not Found page",
    },
  ];
  return (
    <div>
      <Typography
        variant="h5"
        fontWeight={700}
        mb={2}
        sx={{ color: "rgb(45, 55, 72)" }}
      >
        Supporting Pages
      </Typography>
      <Grid container spacing={1} borderLeft="1px solid rgba(0, 0, 0, 0.12) " borderTop="1px solid rgba(0, 0, 0, 0.12)">
        {gridData.map((item, i) => (
          <Grid
            item
            md={4}
            sm={12}
            xs={12}
            key={Math.random()}
            borderRight="1px solid rgba(0, 0, 0, 0.12)"
            borderBottom="1px solid rgba(0, 0, 0, 0.12)"
          >
            <Box p={2}>
              <Typography
                variant="h6"
                fontSize={15}
                fontWeight={700}
                mb={1}
                sx={{ color: "rgb(45, 55, 72)" }}
              >
                {item.heading}
              </Typography>
              <Typography
                variant="p"
                fontSize={16}
                fontWeight={400}
                sx={{ color: "rgb(100, 110, 115)" }}
              >
                {item.paragraph}
              </Typography>
              <Box mt={1}>
                <Link
                  variant="h6"
                  fontSize={14}
                  fontWeight={500}
                  sx={{ color: "rgb(0, 171, 85)" }}
                >
                  view demo
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box py={4} />
    </div>
  );
}
