import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";

import { useState } from "react";

import { styles } from "./styles";
import { THEME } from "../../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

const CardNumber = (props) => {
  const [pickedCard, setpickedCard] = useState(props.cardNumber);
  const [isEdditing, setIsEdditing] = useState(false);

  const handleEdit = () => {
    setIsEdditing(!isEdditing);
  };

  const confirmCard = () => {
    props.pickCardNumber(pickedCard);
    setIsEdditing(!isEdditing);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Card number</Text>
      {!isEdditing ? (
        <View onPress={handleEdit} style={styles.editContainer}>
          <Text style={styles.userName}>
            {pickedCard ? pickedCard : "Add your card"}
          </Text>
          <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
            <Ionicons name="pencil" size={24} color={THEME.colors.secondary} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setpickedCard(text)}
            value={pickedCard}
          />
          <TouchableOpacity onPress={confirmCard} style={styles.editButton}>
            <Ionicons
              name="checkmark-sharp"
              size={24}
              color={THEME.colors.secondary}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardNumber;
