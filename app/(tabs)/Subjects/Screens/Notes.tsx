import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/CardPercent";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Image } from "expo-image";

const GITHUB_AVATAR_URI = "";

const Notes = () => {
  const cardData = [
    {
      topic: "Chapter 1 Foundations of Mathematics",
      uploadedBy: "Manjunath R",
      date: "July 22, 2024",
      imageLink: "../../../../assets/images/pdf_icon.webp",
    },
    {
      topic: "Chapter 2 Algebra and Functions",
      uploadedBy: "Alice Smith",
      date: "August 10, 2024",
      imageLink: "../../../../assets/images/pdf_icon.webp",
    },
    {
      topic: "Chapter 3 Calculus Basics",
      uploadedBy: "Bob Johnson",
      date: "September 5, 2024",
      imageLink: "../../../../assets/images/pdf_icon.webp",
    },
    {
      topic: "Chapter 4 Geometry Essentials",
      uploadedBy: "Carol Davis",
      date: "October 1, 2024",
      imageLink: "../../../../assets/images/pdf_icon.webp",
    },
    {
      topic: "Chapter 5 Probability Theory",
      uploadedBy: "David Lee",
      date: "November 12, 2024",
      imageLink: "../../../../assets/images/pdf_icon.webp",
    },
    {
      topic: "Chapter 6 Statistics and Data Analysis",
      uploadedBy: "Emily White",
      date: "December 18, 2024",
      imageLink: "../../../../assets/images/pdf_icon.webp",
    },
  ];

  return (
    <View className="pt-6 px-4">
      <View className="pb-2">
        <Input
          className="h-12 bg-primary_foreground"
          placeholderClassName="text-secondary_foreground"
          placeholder="Search by subject name or id..."
          />
      </View>
    <ScrollView>
      <View className="pt-4">
        <Text className="text-lg font-semibold">Notes</Text>
        <Text className="text-sm font-normal text-secondary_foreground">
          Summary Notes on Key Concepts and Principles
        </Text>
      </View>
      <View className="pt-6">





        {/* THIS IS NOTES CARD COMPONENT  */}
      <View className="gap-4 pb-36">
        {cardData.map(( item , index) => (
          <Card className="gap-0 w-full " key={index}>
            <CardHeader className="border-b border-border flex-row gap-4 justify-between  items-center">
              <View className="flex-row items-center justify-start gap-4">
                <Image
                  source={require("../../../../assets/images/pdf_icon.webp")}
                  style={{ width: 24, height: 24, resizeMode: "contain" }}
                />
                <CardTitle className="font-medium text-md">{item.topic}</CardTitle>
              </View>
            </CardHeader>
            <CardContent className="h-28 justify-center items-center pb-0">
              <Image
                source={require("../../../../assets/images/docs.jpg")}
                style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              />
            </CardContent>
            <CardFooter className=" flex-row justify-start items-center  py-2 gap-2 border-t border-border">
              <Avatar
                alt="Zach Nugent's Avatar "
                asChild={false}
                className="bg-gray-200 size-6"
              >
                <AvatarImage source={{ uri: item.imageLink }} />
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

      </View>
    </ScrollView>
    </View>
  );
};

export default Notes;
