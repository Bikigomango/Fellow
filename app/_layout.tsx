import { Stack } from "expo-router";
      
      
import { NavigationContainer } from '@react-navigation/native';
// Import your global CSS file
import "../global.css";

import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";



export default function _layout() {
  

  const [newUser, setNewUser] = useState(false);

  const [loaded, error] = useFonts({
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Medium": require("../assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBold": require("../assets/fonts/OpenSans-ExtraBold.ttf"),
    "Roboto-Regular":require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium":require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold":require("../assets/fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack screenOptions={{headerShown:false}}>
      {newUser ? (
        
        <Stack.Screen name="GetStarted" />
      ) : (
        
        <Stack.Screen name="(tabs)" />
     
        
      )}
    </Stack>
  );
}
