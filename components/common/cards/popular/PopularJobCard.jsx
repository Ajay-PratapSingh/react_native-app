import { View, Text, TouchableOpacity} from "react-native";

import styles from "./popularjobcard.style";


const PopularJobCard = ({ item, selectedJob,userdata}) => {

  const user = userdata.find(user => user.id === item.userId);
  console.log(user.name);

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
    >
      <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{user.name}</Text>
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
