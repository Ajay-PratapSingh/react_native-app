import { View, Text, TouchableOpacity} from "react-native";

import styles from "./PostCard.style";


const PopularJobCard = ({ item, selectedJob}) => {

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
    >
      <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.userId}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.body} -
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
