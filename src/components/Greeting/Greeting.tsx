import { useCommonLabels } from "../../utils/config";
import { Box, Typography } from "@mui/material";
import { TypeWriter } from "../TypeWriter";
import { forwardRef, useReducer } from "react";
import {
  getGreeting,
  greetingReducer,
  initialGreetingState,
} from "../../utils/hooks";

const Greeting = forwardRef(({ text = "", children, ...props }: any, ref) => {
  const labels = useCommonLabels();
  const [state, dispatch] = useReducer(greetingReducer, initialGreetingState);

  const getNewText = () => {
    if (text) return;
    const newGreeting = getGreeting(state.greeting);
    dispatch({ type: newGreeting });
  };

  return (
    <Box ref={ref}>
      <Box sx={{ minHeight: 100 }}>
        <Typography variant="h4" onClick={getNewText} sx={{ mb: 2 }}>
          <TypeWriter
            text={text || (labels.get(state.greeting) as string)}
            delayChars={state.delayChars}
          />
        </Typography>
      </Box>
      {children}
    </Box>
  );
});

export { Greeting };
