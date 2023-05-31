import { StyleSheet } from "react-native";

import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: THEME.colors.secondary,
    height: 100,
    width: 350,
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
  },
  title: {
    fontFamily: "Body-Font",
    fontSize: 16,
    marginBottom: 5,
  },
  dataContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  description: {
    fontFamily: "Body-Font",
    fontSize: 13,
    marginVertical: 1,
  },
});
