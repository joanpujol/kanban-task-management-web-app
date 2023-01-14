import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";

const colors = {
  main: "#635FC7",
  mainHover: "#A8A4FF",
  black: "#000112",
  blackDimmed: "rgba(0, 1, 18, 0.5)",
  white: "#FFFFFF",
  whiteDimmed: "rgba(255, 255, 255, 0.5)",
  veryDarkGrey: "#20212C",
  darkGrey: "#2B2C37",
  mediumGrey: "#828FA3",
  mediumGreyDimmed: "rgba(130, 143, 163, 0.25)",
  lightGrey: "#F4F7FD",
  linesDark: "#3E3F4E",
  linesLight: "#E4EBFA",
  red: "#EA5555",
  redHover: "#FF9898",
  secondary: "rgba(99, 95, 199, 0.1)",
  secondaryHover: "rgba(99, 95, 199, 0.25)",
};

const measures = {
  spacing: {
    md: "16px",
    sm: "12px",
  },
  borderRadius: {
    md: "4px",
    sm: "2px",
  },
}

export interface ThemeInterface {
  colors: {
    main: string;
    mainHover: string;
    black: string;
    blackDimmed: string;
    white: string;
    whiteDimmed: string;
    veryDarkGrey: string;
    darkGrey: string;
    mediumGrey: string;
    mediumGreyDimmed: string;
    lightGrey: string;
    linesLight: string;
    linesDark: string;
    red: string;
    redHover: string;
    secondary: string;
    secondaryHover: string;
  };
  theme: {
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      primaryDimmed: string;
    };
    button: {
      color: {
        primary: string;
        secondary: string;
        destructive: string;
      };
      hover: {
        primary: string;
        secondary: string;
        destructive: string;
      };
    };
  };
  spacing: {
    md: string;
    sm: string;
  },
  borderRadius: {
    md: string;
    sm: string
  }
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
      primaryDimmed: colors.blackDimmed,
    },
    button: {
      color: {
        primary: colors.main,
        secondary: colors.secondary,
        destructive: colors.red,
      },
      hover: {
        primary: colors.mainHover,
        secondary: colors.secondaryHover,
        destructive: colors.redHover,
      },
    },
  },
  ...measures
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
      primaryDimmed: colors.whiteDimmed,
    },
    button: {
      color: {
        primary: colors.main,
        secondary: colors.white,
        destructive: colors.red,
      },
      hover: {
        primary: colors.mainHover,
        secondary: colors.white,
        destructive: colors.redHover,
      },
    },
  },
  ...measures
};

export const Theme = ({
  theme,
  children,
}: {
  theme: "light" | "dark";
  children: React.ReactNode;
}) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </>
  );
};
