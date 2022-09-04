import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    minHeight: 64,
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: "#262626",
    borderWidth: 1,
    borderStyle: "solid",
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 8,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  checkboxContainer: {
    marginRight: 8,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  textListContainer: {
    flex: 1,
    flexWrap: "nowrap",
  },
  textList: {
    fontSize: 14,
    textAlign: "center",
  },
  iconContainer: {
    marginLeft: 8,
  },
});
