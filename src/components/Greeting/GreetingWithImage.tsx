import { Box, Grid } from "@mui/material";
import { Greeting } from "./Greeting";
import { forwardRef } from "react";
import { ImageCycle } from "../ImageCycle";

const GreetingWithImage = forwardRef(({ text = "" }: any, ref) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      height={"100vh"}
      p={4}
      ref={ref}
    >
      <Greeting text={text} />

      <ImageCycle show={"img-2.png"} />
    </Box>
  );
});

export { GreetingWithImage };
