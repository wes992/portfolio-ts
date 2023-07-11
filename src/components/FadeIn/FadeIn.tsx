import React, { useEffect, useState } from "react";
import { Fade } from "@mui/material";

interface FadeOptions {
  delay?: number;
  children: any;
}

const FadeIn = ({ delay = 500, children }: FadeOptions) => {
  const [startFade, setStartFade] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStartFade(true), delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <Fade in={startFade} {...{ timeout: 1000 }}>
      {children}
    </Fade>
  );
};

export { FadeIn };
