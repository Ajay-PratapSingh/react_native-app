import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack,} from "expo-router";

import { COLORS, SIZES } from "../constants";
import {
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import useFetch from "../hook/useFetch";
import { useEffect, useState } from "react";


const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn/>
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome/>
          <Popularjobs />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
