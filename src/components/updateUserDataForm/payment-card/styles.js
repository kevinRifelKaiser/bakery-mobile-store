import { StyleSheet } from "react-native";
import { THEME } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontFamily: "Body-Font",
    fontSize: 16,
    fontWeight: "bold",
    color: THEME.colors.black,
  },
  editContainer: {
    width: "90%",
    height: 50,
    marginVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontFamily: "Body-Font",
    fontSize: 16,
    marginLeft: 10,
    color: THEME.colors.black,
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.colors.tertiary,
  },
  input: {
    height: 40,
    width: "80%",
    borderRadius: 5,
    backgroundColor: THEME.colors.background,
  },
});
