import { useEffect, useRef, useState } from "react";
import { Cursor } from "../Cursor";

interface TypeWriterOptions {
  text: string;
  delay?: number;
  secondaryDelay?: number;
  delayChars?: string[];
  cursor?: boolean;
}

const TypeWriter = (options: TypeWriterOptions) => {
  const {
    delay = 50,
    secondaryDelay = 500,
    text = "",
    delayChars = [],
    cursor = true,
  } = options;
  const index = useRef(0);
  const delayIndexes = useRef([] as number[]);

  const [currentText, setCurrentText] = useState("");
  const [hideCursor, setHideCursor] = useState(!cursor);

  useEffect(() => {
    index.current = 0;
    delayIndexes.current = [];
    setCurrentText("");
    setHideCursor(!cursor);
  }, [text, cursor]);

  Array.from(text).forEach((currentText, index: number) => {
    if (delayChars.includes(currentText)) {
      delayIndexes.current.push(index + 1);
    }
  });

  const char = text.charAt(index.current);
  const currentDelay = delayIndexes.current.includes(index.current)
    ? secondaryDelay
    : delay;

  useEffect(() => {
    if (index.current <= text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((val) => val + char);
        index.current += 1;
        if (index.current >= text.length) setHideCursor(true);
      }, currentDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentText, char, currentDelay, text.length]);

  return (
    <>
      {currentText}
      {<Cursor hidden={hideCursor} />}
    </>
  );
};

export { TypeWriter };
