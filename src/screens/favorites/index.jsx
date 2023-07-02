import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../constants/theme";

import useUserDataActions from "../../hooks/useUserDataActions";
import { useAppSelector } from "../../hooks/store";

const Favorites = () => {
  const userData = useAppSelector((state) => state.userData);

  const { onHandleGetUserData } = useUserDataActions();

  return (
    <View style={styles.container}>
      <Text>Favorites Page</Text>
      <Text>this page is still in construction</Text>
      <Button
        color={THEME.colors.tertiary}
        onPress={() => console.log(userData)}
        title="Console log: userData"
      />
      <Button
        color={THEME.colors.tertiary}
        onPress={onHandleGetUserData}
        title="Dispatch get users"
      />
    </View>
  );
};

export default Favorites;
