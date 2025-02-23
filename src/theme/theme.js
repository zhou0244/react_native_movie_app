import { createTheme } from "@rneui/themed";

const theme = createTheme({
  components: {
    Button: {
      raised: false,
      title: "Default",
      buttonStyle: {},
      containerStyle: {},
    },
    Text: (props) => ({
      //set your various properties for the Text element
    }),
  },
  mode: "light",
  darkColors: {
    primary: "#439ce0",
    searchBg: "#303337",
    secondary: "#e95500",
    success: "#439946",
    warning: "#cfbe27",
    white: "#fff5f5",
  },
  lightColors: {
    primary: "#2089dc",
    searchBg: "#303337",
    secondary: "#e95500",
    success: "#52c41a",
    warning: "#faad14",
    white: "#ffffff",
  },
  spacing: {
    xs: 2,
    sm: 6,
    md: 12,
    lg: 24,
    xl: 48,
  },
  txt: {
    xs: 10,
    sm: 14,
    md: 20,
    lg: 28,
    xl: 48,
  },
});

export { theme };
