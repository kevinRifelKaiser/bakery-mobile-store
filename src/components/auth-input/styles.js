import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  input: {
    width: 300,
    height: 30,
    backgroundColor: THEME.colors.background,
  },
  formControl: {},
  label: {},
  errorContainer: {},
  errorText: {},
});
