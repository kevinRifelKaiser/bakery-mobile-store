import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  separeteView: {
    width: "90%",
    height: 1,
    marginVertical: 10,
    backgroundColor: THEME.colors.tertiary,
  },
  editDataButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEME.colors.tertiary,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 7,
    position: "absolute",
    right: 10,
    top: 10,
  },
  editButtonText: {
    marginLeft: 5,
    color: THEME.colors.secondary,
    fontFamily: "Body-Font",
    fontSize: 14,
    fontWeight: "bold",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  editImg: {
    position: "absolute",
    backgroundColor: THEME.colors.tertiary,
    padding: 7,
    borderRadius: 100,
    top: 180,
    right: 10,
  },
  image: {
    height: 200,
    width: 200,
    marginVertical: 20,
    borderRadius: 100,
  },
  addressContainer: {
    width: "90%",
    justifyContent: "center",
  },
  addressTitleContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingVertical: 5,
  },
  addressTitleText: {
    fontFamily: "Body-Font",
    fontSize: 18,
    fontWeight: "bold",
    color: THEME.colors.black,
  },
  addAddressContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  addressText: {
    fontFamily: "Body-Font",
    fontSize: 16,
    color: THEME.colors.black,
  },
  editAddress: {
    position: "absolute",
    backgroundColor: THEME.colors.tertiary,
    padding: 5,
    borderRadius: 100,
    right: 5,
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
