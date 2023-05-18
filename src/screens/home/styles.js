import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.colors.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 20,
  },
  buttonContainer: {
    width: "80%",
    height: 70,
    borderRadius: 7,
    marginTop: 200,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.colors.secondary,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
