import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  Image,
} from "react-native";
import { useState } from "react";
import * as Location from "expo-location";
import useUserDataActions from "../../hooks/useUserDataActions";

import { GOOGLE_MAPS_API_KEY } from "../../constants/googleCloud";

import { styles } from "./styles";
import { THEME } from "../../constants/theme";

const ShippingLocation = ({ addressModalVisible, handleAddressModal }) => {
  const { onHandleAddAddress } = useUserDataActions();
  const [pickedAddress, setPickedAddress] = useState();

  const veryPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions",
        "/You need to authorize the permissions",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const handleGetLocation = async () => {
    const isLocationOk = await veryPermissions();
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync();
    console.log(location);
    setPickedAddress({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const handleConfirmAddress = () => {
    onHandleAddAddress(pickedAddress);
    setPickedAddress();
    handleAddressModal();
  };

  const handleCancel = () => {
    setPickedAddress();
    handleAddressModal();
  };

  return (
    <Modal animationType="slide" visible={addressModalVisible}>
      <View style={styles.container}>
        <View style={styles.addAddressContainer}>
          <Text style={styles.title}>Choose your address</Text>
          {pickedAddress ? (
            <View style={styles.addressImgContainer}>
              <Image
                style={styles.addressImg}
                source={{
                  uri: `https://maps.googleapis.com/maps/api/staticmap?center=${pickedAddress.lat},${pickedAddress.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${pickedAddress.lat},${pickedAddress.lng}&key=${GOOGLE_MAPS_API_KEY}`,
                }}
              />
            </View>
          ) : (
            <View style={styles.addressImgContainer}>
              <Text>No address yet</Text>
            </View>
          )}
          <View style={styles.addAddressButtonsContainer}>
            <Button
              title={!pickedAddress ? "Add address" : "Update address"}
              color={THEME.colors.tertiary}
              onPress={handleGetLocation}
            />
            {pickedAddress && (
              <Button
                title="Confirm"
                color="#00FF00"
                onPress={handleConfirmAddress}></Button>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.cancelContainer} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ShippingLocation;
