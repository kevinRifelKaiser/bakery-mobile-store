import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    paddingTop: 20,
    position: "relative",
  },
  space: {
    width: "90%",
    height: 1,
    marginVertical: 10,
    backgroundColor: THEME.colors.secondary,
  },
  detailsContainer: {
    width: "80%",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  detailsTitle: {
    fontFamily: "Body-Font",
    fontWeight: "bold",
    color: THEME.colors.black,
    fontSize: 20,
    marginBottom: 5,
  },
  detailsDescription: {
    fontFamily: "Body-Font",
    color: THEME.colors.black,
    fontSize: 18,
    marginBottom: 2,
  },
  confirmButton: {
    height: 60,
    width: "80%",
    backgroundColor: THEME.colors.tertiary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
  },
  confirmText: {
    fontFamily: "Body-Font",
    fontWeight: "bold",
    color: THEME.colors.black,
    fontSize: 20,
  },
});
