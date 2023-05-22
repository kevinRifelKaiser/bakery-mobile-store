import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import FavoritesNavigator from "./favorites";

const AppNavigatior = () => {
  const ButtomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <ButtomTab.Navigator initialRouteName="ShopStack">
        <ButtomTab.Screen
          name="ShopStack"
          component={ShopNavigator}
          options={{
            headerShown: false,
            title: "Home",
          }}
        />
        <ButtomTab.Screen
          name="CartStack"
          component={CartNavigator}
          options={{
            headerShown: false,
            title: "Cart",
          }}
        />
        <ButtomTab.Screen
          name="FavoritesStack"
          component={FavoritesNavigator}
          options={{
            headerShown: false,
            title: "Favorites",
          }}
        />
      </ButtomTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatior;
