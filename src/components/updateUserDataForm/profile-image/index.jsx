import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { styles } from "./styles";
import { THEME } from "../../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

const ProfileImage = (props) => {
  const [imageUri, setImageUri] = useState(props.picture);

  const verifyPermissons = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions",
        "You need to authorize the permissions",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const hasPermission = await verifyPermissons();
    if (!hasPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 5],
      quality: 0.8,
    });
    setImageUri(image.assets[0].uri);
    props.pickImage(image.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>Profile picture</Text>
        {!imageUri ? (
          <View style={styles.defaultImg}>
            <Text style={styles.modalDefaultText}>No image taken</Text>
          </View>
        ) : (
          <Image source={{ uri: imageUri }} style={styles.userImg} />
        )}
        <TouchableOpacity style={styles.takePicture} onPress={handlerTakeImage}>
          <Ionicons name="camera" size={30} color={THEME.colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileImage;
