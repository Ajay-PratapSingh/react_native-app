import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./Posts.style";
import { COLORS, SIZES } from "../../../constants";
import PostsCard from "../../common/cards/PostCard";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const { data, isLoading, error } = useFetch("posts");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Posts</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data.map((ele,index)=>(<PostsCard item={ele} key={index}/>))
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
