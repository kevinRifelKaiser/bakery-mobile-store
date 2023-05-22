import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Favorites } from "../screens";

const FavoritesNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesNavigator;
