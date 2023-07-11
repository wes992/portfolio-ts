type PaletteMode = "light" | "dark";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode

          text: {
            primary: "black",
            secondary: "green",
          },
        }
      : {
          // palette values for dark mode
          text: {
            primary: "#d1d1d1",
            secondary: "steelblue",
          },
        }),
  },
});
