import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    flex: 1,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -27,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 32,
  },
  textInput: {
    backgroundColor: "#262626",
    borderWidth: 1,
    borderRadius: 6,
    height: 54,
    flex: 1,
    padding: 16,
    color: "#F2F2F2",
    fontWeight: "400",
    fontSize: 16,
    marginRight: 4,
  },
  button: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
  },
  content: {
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
  },
});
