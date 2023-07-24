import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.colors.background,
  },
  title: {
    fontSize: 72,
    marginVertical: 20,
    width: "80%",
    fontFamily: "Title-Font",
    color: THEME.colors.secondary,
  },
  subTitle: {
    fontSize: 25,
    width: "80%",
    color: THEME.colors.secondary,
    marginVertical: 20,
    fontFamily: "Body-Font",
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "80%",
    height: 70,
    borderRadius: 7,
    marginTop: 200,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.colors.primary,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  buttonText: {
    fontSize: 20,
    color: THEME.colors.tertiary,
    fontFamily: "Body-Font",
  },
});
