import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile page</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Orders")}
        style={styles.ordersButton}>
        <Text style={styles.ordersText}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
