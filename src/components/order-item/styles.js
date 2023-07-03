import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  dataContainer: {
    flex: 1,
    backgroundColor: THEME.colors.tertiary,
    borderRadius: 10,
    flexDirection: "row",
    height: 100,
    width: 350,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  dateText: {
    fontFamily: "Body-Font",
    fontSize: 18,
    fontWeight: "bold",
    color: THEME.colors.secondary,
  },
  amountContainer: {
    height: "60%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  amountText: {
    fontFamily: "Body-Font",
    fontSize: 14,
    color: THEME.colors.secondary,
  },
});
