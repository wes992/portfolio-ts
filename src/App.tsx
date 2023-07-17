import {
  Grid,
  ThemeProvider,
  CssBaseline,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

import { Greeting } from "./components/Greeting";
import { useTheme } from "./utils/Theme";
import { SocialLinks } from "./components/Social";
import { FadeIn } from "./components/FadeIn";
import { Logo } from "./components/Logo";
import { ImageCycle } from "./components/ImageCycle";
import { useScrollVar } from "./utils/hooks";
import { useCommonLabels } from "./utils/config";
import { useElementOnScreen } from "./components/ImageCycle/util";
import { MutableRefObject } from "react";

const App = () => {
  useScrollVar();
  const theme = useTheme();
  const labels = useCommonLabels();

  const [g1Ref, g1Visible] = useElementOnScreen({
    root: null,
    rootMargin: "50%",
    threshold: 1.0,
  }) as [MutableRefObject<null>, boolean];

  const [g2Ref, g2Visible] = useElementOnScreen({
    root: null,
    rootMargin: "50%",
    threshold: 1.0,
  }) as [MutableRefObject<null>, boolean];

  const [g3Ref, g3Visible] = useElementOnScreen({
    root: null,
    rootMargin: "50%",
    threshold: 0.5,
  }) as [MutableRefObject<null>, boolean];

  const getImg = () => {
    if (g1Ref && g1Visible) return "img-1.png";
    if (g2Ref && g2Visible) return "img-2.png";
    if (g3Ref && g3Visible) return "img-3.png";
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid
        container
        alignItems="center"
        height={"100vh"}
        sx={{
          position: "sticky",
          top: 0,
          translate: "0 calc(-1% * (max(var(--scroll), 25) - 25) * 100 / 75)",
          "--background-opacity":
            "calc(100% - 1% * min(var(--scroll), 30) * 100 / 30)",
        }}
      >
        <Grid
          ref={g1Ref}
          container
          item
          height="100%"
          width="50%"
          sx={{
            alignContent: "center",
            backgroundColor: "rgb(30,35,30, var(--background-opacity))",
            paddingLeft: 4,
          }}
        >
          <Greeting>
            <FadeIn delay={4000}>
              <Typography variant="body1">{labels.get("tagline")}</Typography>
            </FadeIn>
          </Greeting>
        </Grid>

        <Grid
          container
          item
          height="100%"
          width="50%"
          sx={{
            alignContent: "center",
            justifyContent: "center",
            background:
              "linear-gradient(210.65deg,rgb(80,85,85, var(--background-opacity)) 0%,rgb(124, 129, 129, var(--background-opacity)) 100%)",
          }}
        >
          <Grid item height="40%" width="40%">
            <Logo />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        height={"100vh"}
        p={4}
        ref={g2Ref}
      >
        <Greeting text={labels.get("longGreeting2")} />
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        height={"100vh"}
        p={4}
        ref={g3Ref}
      >
        <Greeting id={"longGreeting3"} text={labels.get("longGreeting3")} />
      </Grid>
      <Grid container item>
        <ImageCycle show={getImg()} />
      </Grid>
    </ThemeProvider>
  );
};

export { App };
