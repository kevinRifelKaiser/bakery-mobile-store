import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, Orders } from "../screens";

import { THEME } from "../constants/theme";

const ProfileNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "My profile",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: THEME.colors.primary,
            height: 20,
          },
        }}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: THEME.colors.primary,
            height: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
