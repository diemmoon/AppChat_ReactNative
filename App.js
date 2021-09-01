import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Chat from "./src/layout/Chat";
import DangKy from "./src/layout/DangKy";
import DangNhap from "./src/layout/DangNhap";
import Message from "./src/layout/Message";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="DangNhap" component={DangNhap} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="DangKy" component={DangKy} />
        <Stack.Screen name="Message" component={Message} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
