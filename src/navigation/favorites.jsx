import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Favorites } from "../screens";
import { THEME } from "../constants/theme";

const FavoritesNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: THEME.colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesNavigator;
