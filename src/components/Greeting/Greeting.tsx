import { useCommonLabels } from "../../utils/config";
import { Box, Grid, Typography } from "@mui/material";
import { TypeWriter } from "../TypeWriter";
import { FadeIn } from "../FadeIn";
import { useReducer, useState } from "react";
import {
  getGreeting,
  greetingReducer,
  initialGreetingState,
} from "../../utils/hooks";

const Greeting = () => {
  const labels = useCommonLabels();
  // const [greeting, setGreeting] = useState("longGreeting");
  // const pauseChars = greeting === "longGreeting" ? [] : [".", "-"];
  const [state, dispatch] = useReducer(greetingReducer, initialGreetingState);

  const getNewText = () => {
    const newGreeting = getGreeting(state.greeting);
    dispatch({ type: newGreeting });
  };

  return (
    <Box>
      <Typography variant="h4" onClick={getNewText} sx={{ height: 100 }}>
        <TypeWriter
          text={labels.get(state.greeting) as string}
          delayChars={state.delayChars}
        />
      </Typography>
      <FadeIn delay={3000}>
        <Typography variant="body1">{labels.get("tagline")}</Typography>
      </FadeIn>
    </Box>
  );
};

export { Greeting };
