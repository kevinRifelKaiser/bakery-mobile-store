import { StyleSheet } from "react-native";
import { THEME } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 50,
  },
  dataContainer: {
    alignItems: "center",
  },
  title: {
    fontFamily: "Body-Font",
    fontSize: 16,
    fontWeight: "bold",
    color: THEME.colors.black,
  },
  defaultImg: {
    marginTop: 20,
    height: 350,
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: THEME.colors.black,
  },
  userImg: {
    marginTop: 20,
    height: 300,
    width: 240,
  },
  modalDefaultText: {
    fontFamily: "Body-Font",
    fontSize: 18,
    fontWeight: "bold",
    color: THEME.colors.black,
  },
  takePicture: {
    marginTop: 30,
    width: 60,
    height: 60,
    backgroundColor: THEME.colors.tertiary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmContainer: {
    width: 150,
    backgroundColor: "#00FF00",
    marginTop: 20,
    height: 50,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
