import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {},
  ordersButton: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    width: "70%",
    height: 50,
    borderRadius: 10,
    backgroundColor: THEME.colors.tertiary,
  },
});
