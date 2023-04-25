import { StyleSheet } from "react-native";

import { COLORS,FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  logoutbtn:{
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    
  },
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
