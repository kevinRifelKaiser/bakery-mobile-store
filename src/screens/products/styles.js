import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: THEME.colors.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  buttonContainer: {
    width: 100,
    height: 50,
    marginTop: 20,
    marginRight: 270,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: THEME.colors.secondary,
  },
  defaultTextContainer: {
    width: 300,
  },
  defaultTextTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  defaultText: {
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    width: 250,
    height: 40,
    borderRadius: 5,
    padding: 3,
    marginBottom: 10,
  },
  inputButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.colors.secondary,
  },
});
