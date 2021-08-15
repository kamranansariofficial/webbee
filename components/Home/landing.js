import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
export default function landing() {
  const gridData = [
    {
      heading: "Advertisment",
      paragraph: "Advertisment page",
    },
    {
      heading: "Payment App",
      paragraph: "Payment page",
    },
    {
      heading: "Marketing",
      paragraph: "Marketing page",
    },
    {
      heading: "Software Company",
      paragraph: "Software Company page",
    },
    {
      heading: "Course",
      paragraph: "Course page",
    },
    {
      heading: "Crypto Currancy",
      paragraph: "Crypto Currancy page",
    },
    {
      heading: "Design Agency",
      paragraph: "Design Agency page",
    },
    {
      heading: "Consuliting",
      paragraph: "Consulting page",
    },
    {
      heading: "Application",
      paragraph: "Application page",
    },
    {
      heading: "Domain Hosting",
      paragraph: "Domain Hosting page",
    },
    {
      heading: "Travel",
      paragraph: "Travel page",
    },
    {
      heading: "Event",
      paragraph: "Event page",
    },
  ];
  return (
    <div>
      <Typography variant="h5" fontWeight={700} mb={4} color="textPrimary">
        Landing pages
      </Typography>
      <Grid
        container
        spacing={1}
        borderLeft="1px solid rgba(0, 0, 0, 0.12)"
        borderTop="1px solid rgba(0, 0, 0, 0.12)"
      >
        {gridData.map((item, i) => (
          <Grid
            item
            md={4}
            sm={6}
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
                color="textPrimary"
              >
                {item.heading}
              </Typography>
              <Typography
                variant="p"
                fontSize={16}
                fontWeight={400}
                color="textSecondary"
              >
                {item.paragraph}
              </Typography>
              <Box mt={1}>
                <Link
                  variant="h6"
                  fontSize={14}
                  fontWeight={500}
                  color="primary"
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
