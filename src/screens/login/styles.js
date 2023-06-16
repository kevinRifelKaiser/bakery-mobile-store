import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {},
  signUpButton: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    backgroundColor: THEME.colors.tertiary,
  },
});
