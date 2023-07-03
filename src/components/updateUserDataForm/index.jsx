import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useState, useEffect } from "react";

import { useAppSelector } from "../../hooks/store";
import useUserDataActions from "../../hooks/useUserDataActions";
import { GOOGLE_MAPS_API_KEY } from "../../constants/googleCloud";

import ProfileImage from "./profile-image";
import ShippingLocation from "./shipping-location";
import ProfileName from "./profile-name";
import CardNumber from "./payment-card";

const ProfileDataForm = ({ updateDataModal, handleUpdateDataModal }) => {
  const { picture, name, lat, lng, cardNumber } = useAppSelector(
    (state) => state.userData
  );

  const [userImg, setUserImg] = useState();
  const [userName, setUserName] = useState();
  const [userAddress, setUserAddress] = useState();
  const [userCard, setUserCard] = useState();

  const { onHandleAddUserData } = useUserDataActions();

  const confirmUserData = () => {
    onHandleAddUserData({
      image: userImg,
      name: userName,
      lat: userAddress.lat,
      lng: userAddress.lng,
      cardNumber: userCard,
    });
    handleUpdateDataModal();
  };

  let isDissabled = !userImg || !userName || !userAddress || !userCard;

  return (
    <Modal animationType="slide" visible={updateDataModal}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>Update your profile data</Text>
          <ProfileImage pickImage={setUserImg} picture={picture} />
          <View style={styles.separeteView}></View>
          <ProfileName pickName={setUserName} name={name} />
          <View style={styles.separeteView}></View>
          <ShippingLocation
            pickAdress={setUserAddress}
            locationImage={{ lat, lng }}
          />
          <View style={styles.separeteView}></View>
          <CardNumber pickCardNumber={setUserCard} cardNumber={cardNumber} />
          <View style={styles.separeteView}></View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              disabled={isDissabled}
              style={
                !isDissabled
                  ? styles.confirmButton
                  : { ...styles.confirmButton, opacity: 0.5 }
              }
              onPress={confirmUserData}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleUpdateDataModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default ProfileDataForm;
