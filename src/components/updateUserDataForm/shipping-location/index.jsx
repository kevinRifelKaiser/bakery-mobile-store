import { View, Text, Button, Image } from "react-native";
import { useState } from "react";
import * as Location from "expo-location";

import { styles } from "./styles";
import { THEME } from "../../../constants/theme";

const ShippingLocation = (props) => {
  const [pickedAddress, setPickedAddress] = useState(
    props.locationImage ? props.locationImage : false
  );

  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

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
    props.pickAdress({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.addAddressContainer}>
        <Text style={styles.title}>Shipping address</Text>
        {pickedAddress ? (
          <View style={styles.addressImgContainer}>
            <Image
              style={styles.addressImg}
              source={{
                uri: `https://maps.googleapis.com/maps/api/staticmap?center=${pickedAddress.lat},${pickedAddress.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${pickedAddress.lat},${pickedAddress.lng}&key=${googleMapsApiKey}`,
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
        </View>
      </View>
    </View>
  );
};

export default ShippingLocation;
