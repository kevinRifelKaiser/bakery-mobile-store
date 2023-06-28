import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

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
    fontSize: 24,
  },
  addressImgContainer: {
    width: 300,
    height: 200,
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
  cancelContainer: {
    width: 150,
    backgroundColor: THEME.colors.fav,
    height: 50,
    padding: 15,
    marginBottom: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: THEME.colors.background,
    fontFamily: "Body-Font",
    fontWeight: "bold",
    fontSize: 18,
  },
});
