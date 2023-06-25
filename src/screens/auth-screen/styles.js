import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 50,
  },
  title: {
    fontFamily: "Title-Font",
    fontSize: 30,
    color: THEME.colors.secondary,
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    fontFamily: "Body-Font",
    color: THEME.colors.black,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: 300,
    height: 30,
    backgroundColor: "#fff",
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRadius: 5,
  },
  registerButton: {
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 50,
    backgroundColor: THEME.colors.tertiary,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: {
    fontFamily: "Body-Font",
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.colors.secondary,
  },
  textRegisterContainer: {
    width: 300,
    height: 50,
    marginTop: 20,
  },
  pressableTextContainer: {
    height: "100%",
  },
  textRegister: {
    fontFamily: "Body-Font",
    fontSize: 16,
    fontWeight: "bold",
    color: THEME.colors.black,
  },
  pressableText: {
    fontFamily: "Body-Font",
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
  },
});
