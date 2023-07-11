import { useCommonLabels } from "../../utils/config";
import { Box, Typography } from "@mui/material";
import { TypeWriter } from "../TypeWriter";
import { FadeIn } from "../FadeIn";
import { useState } from "react";

const Greeting = () => {
  const pauseChars = [".", "-"];
  const labels = useCommonLabels();
  const [greetingToDisplay, setGreetingToDisplay] = useState("greeting");

  const getNewText = () => {
    const greetings: string[] = ["greeting", "secondGreeting"];
    setGreetingToDisplay(
      (prev) => greetings.find((greeting) => greeting !== prev)!
    );
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="h4" onClick={getNewText} sx={{ height: 100 }}>
        <TypeWriter
          text={labels.get(greetingToDisplay) as string}
          delayChars={pauseChars}
        />
      </Typography>
      <FadeIn delay={3000}>
        <Typography variant="body1">{labels.get("tagline")}</Typography>
      </FadeIn>
    </Box>
  );
};

export { Greeting };
