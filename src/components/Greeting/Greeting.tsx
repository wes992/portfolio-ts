import { useCommonLabels } from "../../utils/config";
import { Box, Typography } from "@mui/material";
import { TypeWriter } from "../TypeWriter";
import { FadeIn } from "../FadeIn";
import { useReducer } from "react";
import {
  getGreeting,
  greetingReducer,
  initialGreetingState,
} from "../../utils/hooks";

const Greeting = () => {
  const labels = useCommonLabels();
  const [state, dispatch] = useReducer(greetingReducer, initialGreetingState);

  const getNewText = () => {
    const newGreeting = getGreeting(state.greeting);
    dispatch({ type: newGreeting });
  };

  return (
    <Box>
      <Box sx={{ height: 100 }}>
        <Typography
          variant="h4"
          onClick={getNewText}
          sx={{ borderLeft: "2px solid green", pl: 2, mb: 2 }}
        >
          <TypeWriter
            text={labels.get(state.greeting) as string}
            delayChars={state.delayChars}
          />
        </Typography>
      </Box>
      <FadeIn delay={4000}>
        <Typography variant="body1">{labels.get("tagline")}</Typography>
      </FadeIn>
    </Box>
  );
};

export { Greeting };
