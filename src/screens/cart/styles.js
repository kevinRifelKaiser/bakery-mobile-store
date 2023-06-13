import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  header: {
    alignItems: "center",
    marginTop: 100,
    width: "90%",
    height: 200,
  },
  headerText: {
    fontFamily: "Body-Font",
    fontSize: 22,
    fontWeight: "bold",
    color: THEME.colors.black,
  },
  subtotal: {
    width: "85%",
    height: 60,
    position: "absolute",
    bottom: 10,
    backgroundColor: THEME.colors.tertiary,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subtotalText: {
    fontFamily: "Body-Font",
    fontSize: 18,
    fontWeight: "bold",
    color: THEME.colors.black,
  },
});
