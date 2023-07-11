import { useReducer } from "react";
import { labels, Labels } from "./config";

interface GreetingState {
  greeting: string;
  delayChars: string[];
}

interface actions {
  type: string;
}

export const initialGreetingState: GreetingState = {
  greeting: "greeting",
  delayChars: [",", "-"],
};

export const getGreeting = (current: string) => {
  switch (current) {
    case "greeting":
      return "longGreeting2";
    case "longGreeting2":
      return "longGreeting3";
    case "longGreeting3":
      return "longGreeting";
    default:
      return "longGreeting";
  }
};

export const greetingReducer = (
  state: GreetingState,
  action: actions
): GreetingState => {
  switch (action.type) {
    case "greeting":
      return {
        ...state,
        greeting: action.type,
        delayChars: [",", "-"],
      };
    default:
      return {
        ...state,
        greeting: action.type,
        delayChars: [".", "-"],
      };
  }
};
