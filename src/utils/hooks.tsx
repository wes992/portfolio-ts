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
      return "greeting";
    default:
      return "greeting";
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

export const useScrollVar = () => {
  const setScrollVar = () => {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled =
      htmlElement.scrollTop / htmlElement.clientHeight;
    const percent = percentOfScreenHeightScrolled * 100;
    htmlElement.style.setProperty("--scroll", `${Math.min(percent, 100)}`);
  };
  setScrollVar();

  window.addEventListener("scroll", setScrollVar);
  window.addEventListener("resize", setScrollVar);
};
