import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: {
    position: "absolute",
    backgroundColor: THEME.colors.background,
    padding: 7,
    borderRadius: 100,
    top: 180,
    right: 100,
  },
  image: {
    height: 200,
    width: 200,
    marginVertical: 20,
    borderRadius: 100,
  },
  buttonsContainer: {
    marginTop: 50,
    width: "100%",
    alignItems: "center",
  },
  ordersButton: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    width: "70%",
    height: 50,
    borderRadius: 5,
    backgroundColor: THEME.colors.tertiary,
  },
});
