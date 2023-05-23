import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../constants/theme";

import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import FavoritesNavigator from "./favorites";

const AppNavigatior = () => {
  const ButtomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <ButtomTab.Navigator
        initialRouteName="ShopStack"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: THEME.colors.primary,
          },
        }}>
        <ButtomTab.Screen
          name="ShopStack"
          component={ShopNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Ionicons
                  name={focused ? "home-sharp" : "home-outline"}
                  size={24}
                  color={THEME.colors.tertiary}
                />
              </View>
            ),
          }}
        />
        <ButtomTab.Screen
          name="CartStack"
          component={CartNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Ionicons
                  name={focused ? "cart-sharp" : "cart-outline"}
                  size={24}
                  color={THEME.colors.tertiary}
                />
              </View>
            ),
          }}
        />
        <ButtomTab.Screen
          name="FavoritesStack"
          component={FavoritesNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Ionicons
                  name={focused ? "md-heart-sharp" : "md-heart-outline"}
                  size={24}
                  color={THEME.colors.tertiary}
                />
              </View>
            ),
          }}
        />
      </ButtomTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatior;
