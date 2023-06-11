import { StyleSheet } from "react-native";

import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: THEME.colors.primary,
    height: 120,
    width: 350,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    height: "90%",
    width: 80,
    marginLeft: 5,
    borderRadius: 5,
  },
  textContainer: {
    height: "90%",
    marginLeft: 10,
    justifyContent: "space-around",
  },
  description: {
    fontFamily: "Body-Font",
    fontSize: 14,
    color: THEME.colors.black,
    fontWeight: "bold",
    marginVertical: 2,
  },
  handleItemContainer: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: "90%",
    marginVertical: 10,
  },
  counterContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  counterText: {
    fontFamily: "Body-Font",
    fontSize: 18,
    marginHorizontal: 10,
  },
  counterButtons: {},
});
