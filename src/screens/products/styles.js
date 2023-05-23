import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: THEME.colors.background,
  },
  title: {
    fontSize: 20,
    fontFamily: "Body-Font",
    marginVertical: 20,
  },
});
