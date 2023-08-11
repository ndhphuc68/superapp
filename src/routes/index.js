import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "../views/Login";
import { ScreenName } from "./modules/ScreenName";
import Tabbar from "./modules/BottomTabNavigator";
import EditProfile from "../views/Profile/EditProfile";
import Message from "../views/Message";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenName.bottomtab}>
        <Stack.Screen
          options={{ headerShown: false }}
          component={LoginView}
          name={ScreenName.login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenName.bottomtab}
          component={Tabbar}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          component={EditProfile}
          name={ScreenName.editProfile}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          component={Message}
          name={ScreenName.message}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
