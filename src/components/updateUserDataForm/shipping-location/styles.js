import { StyleSheet } from "react-native";
import { THEME } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  addAddressContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 20,
    color: THEME.colors.black,
    fontFamily: "Body-Font",
    fontWeight: "bold",
    fontSize: 16,
  },
  addressImgContainer: {
    width: 300,
    height: 200,
    borderColor: THEME.colors.black,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  addressImg: {
    width: "100%",
    height: "100%",
  },
  addAddressButtonsContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  buttonText: {
    color: THEME.colors.background,
    fontFamily: "Body-Font",
    fontWeight: "bold",
    fontSize: 18,
  },
});
