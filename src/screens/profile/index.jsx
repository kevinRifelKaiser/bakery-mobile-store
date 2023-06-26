import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../../constants/theme";

import { ProfileImage } from "../../components";

import useAuthActions from "../../hooks/useAuthActions";
import { useAppSelector } from "../../hooks/store";

const Profile = ({ navigation }) => {
  const { onHandleLogOut } = useAuthActions();
  const profileImage = useAppSelector((state) => state.userData.picture);
  const [userImg, setUserImg] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    setUserImg(profileImage);
  }, [profileImage]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgContainer}>
        {userImg ? (
          <Image style={styles.image} source={{ uri: userImg }} />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            }}
          />
        )}
        <TouchableOpacity onPress={handleModal} style={styles.editIcon}>
          <Ionicons name="pencil-sharp" size={30} color={THEME.colors.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Orders")}
          style={styles.ordersButton}>
          <Text style={styles.ordersText}>Shopping history</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHandleLogOut} style={styles.ordersButton}>
          <Text style={styles.ordersText}>Log out</Text>
        </TouchableOpacity>
      </View>
      <ProfileImage modalVisible={modalVisible} handleModal={handleModal} />
    </ScrollView>
  );
};

export default Profile;
