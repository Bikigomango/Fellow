import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/CardPercent";
import { Image } from "expo-image";
import { Download } from "lucide-react-native";
const GITHUB_AVATAR_URI = "";

const Assignments = () => {
  const AssignData = [
    {
      chapter: 1,
      topic: "Foundations of Mathematics",
      uploadedBy: "Manjunath R",
      date: "July 22, 2024",
      imageLink: "../../../../assets/images/pdf2.png",
    },
    {
      chapter: 2,
      topic: "Advanced Algebra",
      uploadedBy: "Sita Sharma",
      date: "August 5, 2024",
      imageLink: "../../../../assets/images/pdf3.png",
    },
    {
      chapter: 3,
      topic: "Calculus Basics",
      uploadedBy: "Raj Patel",
      date: "August 12, 2024",
      imageLink: "../../../../assets/images/pdf4.png",
    },
    {
      chapter: 4,
      topic: "Differential Equations",
      uploadedBy: "Anjali Mehta",
      date: "August 20, 2024",
      imageLink: "../../../../assets/images/pdf5.png",
    },
    {
      chapter: 5,
      topic: "Linear Algebra",
      uploadedBy: "Ravi Kumar",
      date: "August 30, 2024",
      imageLink: "../../../../assets/images/pdf6.png",
    },
    {
      chapter: 6,
      topic: "Probability Theory",
      uploadedBy: "Sneha Verma",
      date: "September 10, 2024",
      imageLink: "../../../../assets/images/pdf7.png",
    },
    {
      chapter: 7,
      topic: "Statistics and Data Analysis",
      uploadedBy: "Amit Singh",
      date: "September 18, 2024",
      imageLink: "../../../../assets/images/pdf8.png",
    },
    {
      chapter: 8,
      topic: "Mathematical Logic",
      uploadedBy: "Pooja Agarwal",
      date: "September 25, 2024",
      imageLink: "../../../../assets/images/pdf9.png",
    },
    {
      chapter: 9,
      topic: "Number Theory",
      uploadedBy: "Vikram Joshi",
      date: "October 2, 2024",
      imageLink: "../../../../assets/images/pdf10.png",
    },
    {
      chapter: 10,
      topic: "Discrete Mathematics",
      uploadedBy: "Neha Reddy",
      date: "October 10, 2024",
      imageLink: "../../../../assets/images/pdf11.png",
    },
  ];

  return (
    <ScrollView className="px-4">
      <View className="pt-4 pb-6">
        <Text className="text-lg font-semibold">Assignments</Text>
        <Text className="text-sm font-normal text-secondary_foreground">
          Summary Notes on Key Concepts and Principles
        </Text>
      </View>
      <View className="gap-4 pb-24">
        {AssignData.map((item, index) => (
          <Card className="gap-0" key={index}>
            <CardHeader className="border-b border-border flex-row gap-4 justify-between  items-center">
              <View className="flex-row items-center justify-start gap-4">
                <Image
                  source={require("../../../../assets/images/pdf2.png")}
                  style={{ width: 24, height: 24, resizeMode: "contain" }}
                />
                <CardTitle className="font-medium text-md">
                  {item.chapter}
                  {"."} {item.topic}
                </CardTitle>
              </View>
              <View className="border border-border rounded-lg p-1">
                <Download size={15} color={"gray"} />
              </View>
            </CardHeader>
            <CardContent className="h-28 justify-center items-center pb-0">
              <Image
                source={require("../../../../assets/images/pdf2.png")}
                style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              />
            </CardContent>
            <CardFooter className=" flex-row justify-start items-center  py-2 gap-2 border-t border-border">
              <Avatar
                alt="Zach Nugent's Avatar "
                asChild={false}
                className="bg-gray-200 size-6"
              >
                <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
                <AvatarFallback>
                  <Text className="text-red-400">ZN</Text>
                </AvatarFallback>
              </Avatar>
              <View className="flex-row gap-2">
                <CardTitle className="text-sm text-secondary_foreground">
                  Uploaded by {item.uploadedBy}
                </CardTitle>
                <CardTitle className="text-sm text-secondary_foreground">
                  {item.date}
                </CardTitle>
              </View>
            </CardFooter>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

export default Assignments;
