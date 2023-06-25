import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import useAuthActions from "../../hooks/useAuthActions";

const Profile = ({ navigation }) => {
  const { onHandleLogOut } = useAuthActions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile page</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Orders")}
        style={styles.ordersButton}>
        <Text style={styles.ordersText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onHandleLogOut} style={styles.ordersButton}>
        <Text style={styles.ordersText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
