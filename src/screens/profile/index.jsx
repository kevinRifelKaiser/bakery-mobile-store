import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../../constants/theme";

import { ProfileDataForm } from "../../components";

import useAuthActions from "../../hooks/useAuthActions";
import useUserDataActions from "../../hooks/useUserDataActions";
import { useAppSelector } from "../../hooks/store";

const Profile = ({ navigation }) => {
  const { onHandleLogOut } = useAuthActions();
  const { onHandleGetUserData } = useUserDataActions();

  const userData = useAppSelector((state) => state.userData);

  const shippingAddress =
    "Latitude: " + userData.lat + " | Longitude: " + userData.lng;

  // --- Update profile data ---
  const [updateDataModal, setUpdateDataModal] = useState(false);
  const handleUpdateDataModal = () => {
    setUpdateDataModal(!updateDataModal);
  };

  useEffect(() => {
    onHandleGetUserData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={handleUpdateDataModal}
          style={styles.editDataButton}>
          <Ionicons
            name="pencil-sharp"
            size={24}
            color={THEME.colors.secondary}
          />
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <View style={styles.imgContainer}>
          {userData.picture ? (
            <Image style={styles.image} source={{ uri: userData.picture }} />
          ) : (
            <Image
              style={styles.image}
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
              }}
            />
          )}
        </View>
        <View style={styles.separeteView}></View>
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitleText}>Name:</Text>
          {userData.name ? (
            <Text>{userData.name}</Text>
          ) : (
            <Text style={styles.addressText}>Update your user name.</Text>
          )}
        </View>
        <View style={styles.separeteView}></View>
        <View style={styles.addressContainer}>
          <View style={styles.addressTitleContainer}>
            <Text style={styles.addressTitleText}>Shipping address:</Text>
          </View>
          {userData.lat && userData.lng ? (
            <Text style={styles.defaultAddressText}>{shippingAddress}</Text>
          ) : (
            <View style={styles.addAddressContainer}>
              <View style={styles.addContainer}>
                <Text style={styles.addressText}>Add your address</Text>
              </View>
            </View>
          )}
        </View>
        <View style={styles.separeteView}></View>
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitleText}>Card:</Text>
          {userData.cardNumber ? (
            <Text>{userData.cardNumber}</Text>
          ) : (
            <Text style={styles.addressText}>Update your user name.</Text>
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
        <ProfileDataForm
          updateDataModal={updateDataModal}
          handleUpdateDataModal={handleUpdateDataModal}
          picture
          name
          lat
          lng
          cardNumber
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
