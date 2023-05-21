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
    marginVertical: 20,
    fontFamily: "Poppins-Black",
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 20,
    fontFamily: "Poppins-Black",
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
    fontSize: 18,
    fontFamily: "Poppins-Black",
  },
});
