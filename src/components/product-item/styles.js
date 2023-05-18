import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 100,
    borderRadius: 7,
    backgroundColor: THEME.colors.secondary,
  },
  title: {
    fontSize: 18,
  },
});
