import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";
// import { Card } from "@/components/ui/card";
import { Image } from "expo-image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const GITHUB_AVATAR_URI = "";

const Notification = () => {
  const data = [
    {
      uploadedBy: "Narayan R",
      desc: "This is Geometry chapter 2",
      date: "3:35 pm July 30",
      documentTitle: "chapter 2 Geometry",
    },
    {
      uploadedBy: "Aisha K",
      desc: "Introduction to Algebra",
      date: "11:20 am August 1",
      documentTitle: "Algebra Basics",
    },
    {
      uploadedBy: "Ravi S",
      desc: "Understanding Organic Chemistry concepts",
      date: "2:15 pm August 2",
      documentTitle: "Organic Chemistry Overview",
    },
    {
      uploadedBy: "Sita M",
      desc: "History of Ancient Civilizations",
      date: "9:45 am August 3",
      documentTitle: "Ancient Civilizations",
    },
    {
      uploadedBy: "Rajesh P",
      desc: "Basics of Programming in JavaScript",
      date: "4:10 pm August 4",
      documentTitle: "JavaScript 101",
    },
    {
      uploadedBy: "Maya L",
      desc: "Introduction to Data Structures",
      date: "6:00 pm August 5",
      documentTitle: "Data Structures Primer",
    },
    {
      uploadedBy: "Vikram T",
      desc: "Advanced Topics in Calculus",
      date: "1:30 pm August 6",
      documentTitle: "Calculus Advanced Topics",
    },
    {
      uploadedBy: "Ananya J",
      desc: "Fundamentals of Machine Learning",
      date: "10:00 am August 7",
      documentTitle: "Machine Learning Basics",
    },
    {
      uploadedBy: "Deepak R",
      desc: "Introduction to Quantum Physics",
      date: "12:15 pm August 8",
      documentTitle: "Quantum Physics Intro",
    },
    {
      uploadedBy: "Priya S",
      desc: "Exploring Modern Art Movements",
      date: "3:50 pm August 9",
      documentTitle: "Modern Art Movements",
    },
    {
      uploadedBy: "Sandeep K",
      desc: "Principles of Financial Accounting",
      date: "5:30 pm August 10",
      documentTitle: "Financial Accounting Basics",
    },
    {
      uploadedBy: "Neha B",
      desc: "Introduction to Microeconomics",
      date: "7:00 pm August 11",
      documentTitle: "Microeconomics Introduction",
    },
    {
      uploadedBy: "Arjun D",
      desc: "Fundamentals of Software Engineering",
      date: "2:30 pm August 12",
      documentTitle: "Software Engineering Fundamentals",
    },
    {
      uploadedBy: "Rita M",
      desc: "History of the Renaissance Period",
      date: "8:15 am August 13",
      documentTitle: "Renaissance History",
    },
    {
      uploadedBy: "Amit K",
      desc: "Principles of Astrophysics",
      date: "4:45 pm August 14",
      documentTitle: "Astrophysics Principles",
    },
  ];
  

  return (
    <View>
      <View className="mt-6 px-4">
        <View className="flex-row justify-between pb-6">
          <Pressable onPress={() => router.back()}>
            <ArrowLeft size={24} color={"black"} />
          </Pressable>
          <Text className="text-base font-semibold">Notification</Text>
          <View></View>
        </View>

        {/* //  THE AVATAR COMPONENT IS HERE */}
        <ScrollView>
        <View className="flex-col gap-5 pb-32">
          {data.map((item, index) => (
            <View className="flex-row gap-3" key={index}>
              <View className="flex-row">
                <Avatar
                  alt="cannot find the image"
                  asChild={false}
                  className="bg-gray-200 size-6"
                >
                  <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
                  <AvatarFallback>
                    <Text className="text-red-400">ZN</Text>
                  </AvatarFallback>
                </Avatar>
              </View>
              <View className="flex-col gap-2">
                <Text className="font-semibold text-base">
                  Notes as been Uploaded by {item.uploadedBy}
                </Text>
                <Text className="font-normal text-sm">{item.desc}</Text>
                <Text className="font-normal text-sm">{item.date}</Text>
                <View className="py-1 px-2 w-36 h-7  rounded-md flex-row justify-start items-center gap-1 border border-border">
                  {/* <Image
                    source={require("../../../assets/images/pdf_icon.webp")}
                    style={{ width: 12, height: 12 }}
                  /> */}
                  <Text
                    numberOfLines={1}
                    className="text-xs font-normal  w-28 "
                  >
                    {item.documentTitle}{" "}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Notification;
