import { Grid, ThemeProvider, CssBaseline } from "@mui/material";

import { Greeting } from "./components/Greeting";
import { useTheme } from "./utils/Theme";
import { SocialLinks } from "./components/Social";
import { FadeIn } from "./components/FadeIn";
import { Logo } from "./components/Logo";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        height={"100vh"}
        gap={2}
        direction="column"
      >
        <Grid container item justifyContent="start" width={"70%"}>
          <Greeting />
        </Grid>

        <Grid item>
          <Logo />
        </Grid>

        <Grid item m={2}>
          <FadeIn delay={4000}>
            <Grid item>
              <SocialLinks />
            </Grid>
          </FadeIn>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export { App };
