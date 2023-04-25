import { useState } from "react";
import {
  View,
  Text,
} 
from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello</Text>
        <Text style={styles.welcomeMessage}>Find the posts here</Text>
      </View>
    </View>
  );
};

export default Welcome;
