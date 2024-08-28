import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

// Static import for image
import profilePhoto from "../../../assets/images/dp.jpg";

import { CircleUserRound, Mail, Phone, ListRestart , SquarePen , ChevronRight } from "lucide-react-native";

const UserData = {
  name: "John Doe",
  email: "johndoe001@gmail.com",
  phone: "9984757360",
  photo: profilePhoto, // Use the imported image here
};

const Profile = () => {
  return (
    <ScrollView className="px-4 pt-20 pb-6">
      <View className="items-center gap-5 pb-8">
        <Image
          source={UserData.photo}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <View className="flex-col items-center gap-1">
          <Text className="text-lg font-medium">{UserData.name}</Text>
          <Text className="text-md font-normal">{UserData.email}</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#E1E7EF",
          width: "100%",
        }}
      />
      <View className="py-6">
        <View className="">
          <Text className="text-lg font-medium">Personal Information</Text>
        </View>
        <View className="p-6">
          <View className="flex-row items-center gap-5 pb-6">
            <CircleUserRound size={24} color={"black"} />
            <Text className="text-md font-normal">{UserData.name}</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#E1E7EF",
              width: "100%",
            }}
          />
          <View className="flex-row items-center justify-between py-6">
            <View className="flex-row gap-5">
            <Mail size={24} color={"black"} />
            <Text className="text-md font-normal">{UserData.email}</Text>
            </View>
            <SquarePen  color={'black'} size={20}/>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#E1E7EF",
              width: "100%",
            }}
          />
          <View className="flex-row items-center gap-5 py-6">
            <Phone size={24} color={"black"} />
            <Text className="text-md font-normal">{UserData.phone}</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#E1E7EF",
              width: "100%",
            }}
          />
          <View className="flex-row items-center justify-between py-6">
            <View  className="flex-row gap-5">
            <ListRestart size={24} color={"black"} />
            <Text className="text-md font-normal">Reset Password</Text>
            </View>
              <ChevronRight size={20} color={'black'}/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
