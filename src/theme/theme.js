import { StyleSheet } from "react-native";

const blue = "royalblue";
const grey = "grey";
const refreshBlue = "#1957ff";

const styles = StyleSheet.create({
  warning: {
    color: "red",
    textAlign: "center",
    marginTop: 2,
  },
  textOnWhite: { color: blue, textAlign: "center" },
  textOnDark: { color: "white", textAlign: "center" },
  dialog: {
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  video: {
    width: 350,
    height: 275,
  },
  logo: {
    fontWeight: 700,
    fontSize: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
  },
  buttonBase: {
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: blue,
    marginBlockStart: 16,
  },
  buttonOutline: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: blue,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "white",
    marginBlockStart: 16,
  },
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  icon: {
    fontSize: 12,
  },
  refresh: refreshBlue,
  active: blue,
  inactive: grey,
  textSizes: [12, 14, 16, 24],
  body: { backgroundColor: "white" },
  container: {
    padding: 16,
    card: {
      padding: 16,
      backgroundColor: "#e1e1e1",
    },
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: "center",
    margin: 16,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  link: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
});

export { styles };
