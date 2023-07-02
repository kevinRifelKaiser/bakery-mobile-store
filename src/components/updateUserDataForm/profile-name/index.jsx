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

const ProfileName = (props) => {
  const [pickedName, setpickedName] = useState(props.name);
  const [isEdditing, setIsEdditing] = useState(false);

  const handleEdit = () => {
    setIsEdditing(!isEdditing);
  };

  const confirmName = () => {
    props.pickName(pickedName);
    setIsEdditing(!isEdditing);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name</Text>
      {!isEdditing ? (
        <View onPress={handleEdit} style={styles.editContainer}>
          <Text style={styles.userName}>
            {pickedName ? pickedName : "Add your name"}
          </Text>
          <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
            <Ionicons name="pencil" size={24} color={THEME.colors.secondary} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setpickedName(text)}
            value={pickedName}
          />
          <TouchableOpacity onPress={confirmName} style={styles.editButton}>
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

export default ProfileName;
