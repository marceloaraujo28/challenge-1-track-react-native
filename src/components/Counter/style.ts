import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 19,
  },
  counterText: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 17,
    marginRight: 8,
  },
  boxNumber: {
    backgroundColor: "#333333",
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  },
  counterNumber: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 15,
    color: "#fff",
  },
});
