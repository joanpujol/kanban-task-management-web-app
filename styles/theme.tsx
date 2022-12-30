import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";

const colors = {
  main: "#635FC7",
  mainHover: "#A8A4FF",
  black: "#000112",
  white: "#FFFFFF",
  veryDarkGrey: "#20212C",
  darkGrey: "#2B2C37",
  mediumGrey: "#828FA3",
  lightGrey: "#F4F7FD",
  linesDark: "#3E3F4E",
  linesLight: "#E4EBFA",
  red: "#EA5555",
  redHover: "#FF9898",
};

interface ThemeInterface {
  colors: {
    main: string;
    mainHover: string;
    black: string;
    white: string;
    veryDarkGrey: string;
    darkGrey: string;
    mediumGrey: string;
    lightGrey: string;
    linesLight: string;
    linesDark: string;
    red: string;
    redHover: string;
  };
  theme: {
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
    };
  };
}

const lightTheme: ThemeInterface = {
  colors: {
    ...colors,
  },
  theme: {
    background: {
      primary: colors.white,
      secondary: colors.lightGrey,
    },
    text: {
      primary: colors.black,
    },
  },
};

const darkTheme: ThemeInterface = {
  colors: {
    ...colors,
  },
  theme: {
    background: {
      primary: colors.darkGrey,
      secondary: colors.veryDarkGrey,
    },
    text: {
      primary: colors.white,
    },
  },
};

export const Theme = ({ theme, children }: { theme: 'light' | 'dark', children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>{children}</ThemeProvider>
    </>
  );
};
