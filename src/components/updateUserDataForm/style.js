import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    fontFamily: "Body-Font",
    fontSize: 24,
    color: THEME.colors.black,
  },
  separeteView: {
    width: "90%",
    height: 1,
    marginVertical: 10,
    backgroundColor: THEME.colors.tertiary,
  },
  centerContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  confirmButton: {
    width: 150,
    backgroundColor: "#00FF00",
    height: 50,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  cancelButton: {
    width: 150,
    backgroundColor: THEME.colors.fav,
    height: 50,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: THEME.colors.background,
    fontFamily: "Body-Font",
    fontWeight: "bold",
    fontSize: 18,
  },
});
