import { StyleSheet } from "react-native";

const blue = "royalblue";
const grey = "grey";
const refreshBlue = "#1957ff";

const styles = StyleSheet.create({
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
  },
  buttonBase: {
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: blue,
  },
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    fontSize: 12,
  },
  refresh: refreshBlue,
  active: blue,
  inactive: grey,
  textSizes: [12, 14, 16, 24],
  container: {
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0,
    height: "100%",
    borderWidth: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 24,
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
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#c9c9c9",
    borderRadius: 8,
  },
});

export { styles };
