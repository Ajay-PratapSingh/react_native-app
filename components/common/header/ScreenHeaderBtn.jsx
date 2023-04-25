import { Image, TouchableOpacity } from "react-native";

import styles from "./screenheader.style";
import { useNavigation } from "expo-router";

const ScreenHeaderBtn = () => {
  const navigation = useNavigation();
  const handlePress=()=>{
    navigation.navigate('login');
  }
  return (
    <TouchableOpacity style={styles.logoutbtn} onPress={handlePress}>
      Logout
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
