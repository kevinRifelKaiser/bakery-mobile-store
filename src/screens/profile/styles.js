import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {},
  ordersButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: 50,
    borderRadius: 10,
    backgroundColor: THEME.colors.tertiary,
  },
});
