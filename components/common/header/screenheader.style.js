import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  logoutbtn: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    width: 100,
    borderRadius: 5,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#FF1493",
    marginLeft:10,
    marginBottom:20,
  },
});

export default styles;
