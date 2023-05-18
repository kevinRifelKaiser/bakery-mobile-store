import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Products } from "../screens";

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
