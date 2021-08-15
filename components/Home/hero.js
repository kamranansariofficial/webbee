import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/system";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
function hero() {
  const Data = [
    {
      img: (
        <svg
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#00ab55"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          ></path>
        </svg>
      ),
      heading: "Built for developers",
      paragraph:
        "Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.",
    },
    {
      img: (
        <svg
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#00ab55"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>
      ),
      heading: "Designed to be modern",
      paragraph:
        "Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.",
    },
    {
      img: (
        <svg
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#00ab55"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      ),
      heading: "Documentation for everything",
      paragraph:
        "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
    },
  ];
  const theme = useTheme();
  return (
    <Box
      sx={{ bgcolor: theme.palette.background.paper }}
    >
      <Container>
        <Box py={5} />
        <Grid container spacing={2}>
          {Data.map((item, i) => (
            <Grid item md={4} sm={12} key={Math.random()} textAlign="center">
              <Box
                borderRadius={50}
                display="inline-grid"
                width={60}
                height={60}
                p="18px"
                mb={2}
                bgcolor={`rgba${theme.palette.primary.main.slice(3, -1)}, 0.1)`}
              >
                {item.img}
              </Box>
              <Typography variant="h6" fontWeight={500} mb={2}>
                {item.heading}
              </Typography>
              <Typography variant="p" fontWeight={400} color="textSecondary">
                {item.paragraph}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box py={4} />
      </Container>
    </Box>
  );
}

export default hero;
