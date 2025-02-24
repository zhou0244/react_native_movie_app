import { StyleSheet } from "react-native";

const blue = "royalblue";
const grey = "grey";
const refreshBlue = "#1957ff";

const styles = StyleSheet.create({
  listFooter: {
    textAlign: "center",
    padding: 20,
    fontFamily: "RobotoSlab",
    color: "#666",
  },
  movieInfo: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 32,
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
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
    width: "100%",
    height: 300,
  },
  card: {
    borderRadius: 12,
    padding: 8,
    marginVertical: 24,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  poster: {
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 8,
    height: 320,
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
  button: {
    borderRadius: 64,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: blue,
    marginBlockStart: 16,
  },
  buttonOutline: {
    borderRadius: 64,
    borderWidth: 1,
    borderColor: blue,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "white",
    marginBlockStart: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
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
  body: { height: "100%", backgroundColor: "white" },
  container: {
    padding: 16,
  },
  cardList: {
    backgroundColor: "#e1e1e1",
  },
  title: {
    fontFamily: "RobotoSlab_Bold",
    fontSize: 28,
    fontWeight: 700,
    textAlign: "center",
  },
  subTitle: {
    fontFamily: "RobotoSlab_SemiBold",
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },
  text: {
    fontFamily: "RobotoSlab_Regular",
    fontSize: 16,
    textAlign: "center",
  },
  rate: {
    fontFamily: "RobotoSlab_SemiBold",
    fontSize: 16,
    textAlign: "center",
    color: "#f04800",
  },
  link: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
});

export { styles };
