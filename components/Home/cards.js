import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
function cards() {
  const value = [
    {
      img: (
        <svg
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>
      ),
      heading: "Themeable",
      paragraph:
        "Customize any part of our components to match your design needs.",
    },
    {
      img: (
        <svg
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      ),
      heading: "Light and Dark UI",
      paragraph:
        "Optimized for multiple color modes. Use light or dark, your choice.",
    },
    {
      img: (
        <svg
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          ></path>
        </svg>
      ),
      heading: "Composable",
      paragraph:
        "Designed with composition in mind. Compose new components with ease",
    },
    {
      img: (
        <svg
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
      heading: "Developer Experience",
      paragraph:
        "Guaranteed to boost your productivity when building your app or website.",
    },
    {
      img: (
        <svg
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      ),
      heading: "Continuous Updates",
      paragraph:
        "We continually deploy improvements and new updates to Webbee.",
    },
    {
      img: (
        <svg
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      ),
      heading: "Free support",
      paragraph:
        "6 months of free technical support to help you build your website faster.",
    },
  ];
  return (
    <div className="cards">
      <Container>
        <Box py={2} />
        <Grid container spacing={2}>
          {value.map((item, i) => (
            <Grid item md={4} sm={12} key={Math.random()}>
              <Card className="card-data">
                <CardContent>
                  <Box
                    borderRadius={50}
                    bgcolor="rgb(0, 171, 85)"
                    display="inline-grid"
                    width={50}
                    height={50}
                    p="13px"
                    mb={2}
                  >
                    {item.img}
                  </Box>
                  <Typography variant="h5" mb={2}>
                    {item.heading}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.paragraph}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box py={3} />
      </Container>
    </div>
  );
}

export default cards;
