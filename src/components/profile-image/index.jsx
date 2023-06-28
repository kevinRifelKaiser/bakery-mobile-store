import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

import useUserDataActions from "../../hooks/useUserDataActions";

const ProfileImage = ({ pictureModalVisible, handlePictureModal }) => {
  const { onHandleAddImage } = useUserDataActions();
  const [imageUri, setImageUri] = useState();

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
  };

  const handleConfirmPicture = () => {
    onHandleAddImage(imageUri);
    setImageUri();
    handlePictureModal();
  };

  const handleCancel = () => {
    setImageUri();
    handlePictureModal();
  };

  return (
    <Modal animationType="slide" visible={pictureModalVisible}>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Text style={styles.title}>Change your profile picture</Text>
          {!imageUri ? (
            <View style={styles.defaultImg}>
              <Text style={styles.modalDefaultText}>No image taken</Text>
            </View>
          ) : (
            <Image source={{ uri: imageUri }} style={styles.userImg} />
          )}
          <TouchableOpacity
            style={styles.takePicture}
            onPress={handlerTakeImage}>
            <Ionicons name="camera" size={30} color={THEME.colors.secondary} />
          </TouchableOpacity>
          {imageUri && (
            <TouchableOpacity
              style={styles.confirmContainer}
              onPress={handleConfirmPicture}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.cancelContainer} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ProfileImage;
