import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  title: {
    marginTop: 20,
    fontFamily: "Body-Font",
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.colors.black,
  },
  img: {
    height: 300,
    width: "85%",
    marginTop: 20,
  },
  descriptionContainer: {
    width: "85%",
    alignItems: "flex-start",
    marginTop: 20,
    color: THEME.colors.black,
  },
  description: {
    fontFamily: "Body-Font",
    fontSize: 18,
  },
  contentContainer: {
    width: "85%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    width: 150,
  },
  counterText: {
    fontFamily: "Body-Font",
    fontWeight: "bold",
    fontSize: 22,
    color: THEME.colors.black,
  },
  addToCartButton: {
    marginTop: 15,
    height: 40,
    borderRadius: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.colors.tertiary,
  },
  addToCartText: {
    fontFamily: "Body-Font",
    color: THEME.colors.black,
    fontSize: 16,
    fontWeight: "bold",
  },
});
