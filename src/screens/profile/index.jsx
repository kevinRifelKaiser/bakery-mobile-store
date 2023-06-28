import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../../constants/theme";

import { ProfileImage, ShippingLocation } from "../../components";

import useAuthActions from "../../hooks/useAuthActions";
import { useAppSelector } from "../../hooks/store";

const Profile = ({ navigation }) => {
  const { onHandleLogOut } = useAuthActions();

  // --- Change profile picture ---
  const profileImage = useAppSelector((state) => state.userData.picture);
  const [userImg, setUserImg] = useState();
  const [pictureModalVisible, setPictureModalVisible] = useState(false);
  const handlePictureModal = () => {
    setPictureModalVisible(!pictureModalVisible);
  };

  // --- Change delivery address ---
  const { lat, lng } = useAppSelector((state) => state.userData);
  const shippingAddress = "Latitude: " + lat + " | Longitude: " + lng;
  const [userAddress, setUserAddress] = useState();
  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const handleAddressModal = () => {
    setAddressModalVisible(!addressModalVisible);
  };

  useEffect(() => {
    setUserImg(profileImage);
    setUserAddress(shippingAddress);
  }, [profileImage, shippingAddress]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
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
          <TouchableOpacity onPress={handlePictureModal} style={styles.editImg}>
            <Ionicons
              name="pencil-sharp"
              size={30}
              color={THEME.colors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.separeteView}></View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTitle}>Name:</Text>
          <Text>Update your user name.</Text>
        </View>
        <View style={styles.separeteView}></View>
        <View style={styles.addressContainer}>
          <View style={styles.addressTitleContainer}>
            <Text style={styles.addressTitleText}>Shipping address:</Text>
          </View>
          {lat ? (
            <Text style={styles.defaultAddressText}>{userAddress}</Text>
          ) : (
            <View style={styles.addAddressContainer}>
              <TouchableOpacity
                onPress={handleAddressModal}
                style={styles.addContainer}>
                <Ionicons name="add" size={30} color={THEME.colors.secondary} />
                <Text style={styles.addressText}>Add your address</Text>
              </TouchableOpacity>
            </View>
          )}
          {lat && (
            <TouchableOpacity
              onPress={handleAddressModal}
              style={styles.editAddress}>
              <Ionicons
                name="pencil-sharp"
                size={30}
                color={THEME.colors.black}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.separeteView}></View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Orders")}
            style={styles.ordersButton}>
            <Text style={styles.ordersText}>Shopping history</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onHandleLogOut}
            style={styles.ordersButton}>
            <Text style={styles.ordersText}>Log out</Text>
          </TouchableOpacity>
        </View>
        <ProfileImage
          pictureModalVisible={pictureModalVisible}
          handlePictureModal={handlePictureModal}
        />
        <ShippingLocation
          addressModalVisible={addressModalVisible}
          handleAddressModal={handleAddressModal}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
