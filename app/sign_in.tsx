import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import Home from "./(tabs)/Home/_layout";
import { router } from "expo-router";
export default function SignIn() {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const [isValid, setIsValid] = useState(false);

  interface DataProps {
    studentID: string;
    password: string;
  }

  const data: DataProps[] = [
    { studentID: 'FEL001', password: 'fellow' },
  ];

  const handleChangeStudentID = (text:string) => {
    setStudentID(text);
  };

  const handleChangePassword = (text:string) => {
    setPassword(text);
  };

  const ErrorComp = () => {
    return (
      <>
        <Text className="text-red-600 text-md px-1 pt-4">Credentials are incorrect</Text>
      </>
    );
  };

  const validateCredentials = () => {
    let valid = false;
    data.forEach((item) => {
      if (studentID === item.studentID && password === item.password) {
        valid = true;
      }
    });

    if (valid) {
      setIsValid(true);
      setErrorMsg(false);
      router.push('./Home'); 
    } else {
      setIsValid(false);
      setErrorMsg(true);
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <View className="h-full flex-1 items-center gap-20 pt-24">
        
            <View className="items-center gap-3">
              <Image
                style={{
                  height: 50,
                  width: 50,
                }}
                source={require("../assets/images/rocket.png")}
                contentFit="contain"
                transition={200}
              />
              <Text className="text-3xl font-bold">Fellow</Text>
              <Text className="font-normal text-muted_foreground">
                Your Academic Hub is Just a Login Away
              </Text>
            </View>
            <View className="w-full gap-10 px-5">
              <View className="w-full gap-3">
                <Text className="text-sm font-normal text-muted_foreground">
                  Student ID
                </Text>
                <TextInput
                  keyboardType="default"
                  value={studentID}
                  onChangeText={handleChangeStudentID}
                  cursorColor={"black"}
                  className="h-12 w-full rounded-md border border-border px-3 focus:border-primary"
                />
              </View>
              <View className="w-full gap-3">
                <Text className="text-sm font-normal text-muted_foreground">
                  Password
                </Text>
                <TextInput
                  secureTextEntry
                  value={password}
                  onChangeText={handleChangePassword}
                  cursorColor={"black"}
                  className="h-12 w-full rounded-md border border-border px-3 focus:border-primary"
                />
                 {errorMsg && <ErrorComp />}
              </View>

             

              <TouchableOpacity onPress={validateCredentials}>
                <View className="w-full items-center rounded-md bg-primary px-4 py-3">
                  <Text className="text-lg font-semibold text-secondary">
                    Sign in
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
      </View>
    </SafeAreaProvider>
  );
}
