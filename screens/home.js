import { SafeAreaView, ScrollView, View } from "react-native";


import { COLORS, SIZES } from "../constants";
import {
  Posts,
  ScreenHeaderBtn,
  Welcome,
} from "../components";



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
          <Posts/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
