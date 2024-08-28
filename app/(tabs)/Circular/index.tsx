import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/CardPercent";
import { Download } from "lucide-react-native";
import { Image } from "expo-image";

const Circular = () => {
  const GITHUB_AVATAR_URI =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPLQXrMu0uGEQINJcPiJBisOXpoCQctBdgw&s";




    const CircularData = [
      {
        id: 1,
        title: "Chapter 1 Foundations of Mathematics",
        description: "Scholarships are financial awards provided to students to support their education. They are typically awarded based on various criteria such as academic merit, financial need, leadership skills, community service.",
        imageUrl: "../../assets/images/pdf_icon.webp",
        uploadedBy: "Narayan R",
        uploadDate: "Jan 24, 2024",
      },
      {
        id: 2,
        title: "Chapter 2 Introduction to Physics",
        description: "An overview of fundamental concepts in physics, including motion, forces, and energy. This chapter explores basic principles and their applications in real-world scenarios.",
        imageUrl: "../../assets/images/pdf_icon.webp",
        uploadedBy: "Aisha S",
        uploadDate: "Feb 12, 2024",
      },
      {
        id: 3,
        title: "Chapter 3 Fundamentals of Chemistry",
        description: "This chapter covers the basics of chemistry, including atomic structure, chemical bonding, and reactions. It provides a foundation for understanding more complex chemical concepts.",
        imageUrl: "../../assets/images/pdf_icon.webp",
        uploadedBy: "Raj K",
        uploadDate: "Mar 05, 2024",
      },
      {
        id: 4,
        title: "Chapter 4 Introduction to Biology",
        description: "Explore the basic principles of biology, including cell structure, genetics, and evolution. This chapter lays the groundwork for studying more advanced biological topics.",
        imageUrl: "../../assets/images/pdf_icon.webp",
        uploadedBy: "Emily J",
        uploadDate: "Apr 10, 2024",
      },
      {
        id: 5,
        title: "Chapter 5 Basics of Computer Science",
        description: "An introduction to computer science concepts, including programming fundamentals, algorithms, and data structures. This chapter provides a starting point for deeper exploration into computing.",
        imageUrl: "../../assets/images/pdf_icon.webp",
        uploadedBy: "Sofia M",
        uploadDate: "May 15, 2024",
      },
      {
        id: 6,
        title: "Chapter 6 Advanced Project Management",
        description: "This chapter delves into advanced project management techniques, including risk management, resource allocation, and strategic planning. It is essential for effective project execution.",
        imageUrl: "../../assets/images/pdf_icon.webp",
        uploadedBy: "Michael B",
        uploadDate: "Jun 20, 2024",
      },
      // Add more objects here as needed
    ];
    






  return (
    <View className="px-4 py-4">
      <View className="pb-6">
        <Text className="text-lg font-semibold">Circulars</Text>
        <Text className="text-sm text-secondary_foreground font-medium">
          Essential Notices and Updates for the Community
        </Text>
      </View>
      <View className="pb-2">
        <Input placeholder="Search..." className="h-12 bg-primary_foreground" />
      </View>
        <ScrollView>
      <View className="gap-4 pt-7 pb-48">
          {CircularData.map((item, index) => (
            <Card className="gap-0 w-full" key={index}>
              <CardHeader className="border-b border-border flex-row gap-4 justify-between  items-center">
                <View className="flex-row items-center justify-start gap-4">
                  <Image
                    source={require("../../../assets/images/pdf_icon.webp")}
                    style={{ width: 24, height: 24 }}
                  />
                  <CardTitle className="font-medium text-md">
                    {item.title}
                  </CardTitle>
                </View>
                <View className="border border-border rounded-lg p-1">
                  <Download size={15} color={"gray"} />
                </View>
              </CardHeader>
              <CardContent className="h-28 justify-center items-center px-4">
                {/* <Image source={require("../../assets/images/pdf_icon.webp")} style={{width:'100%' , height:'100%' ,}} /> */}

                <Text numberOfLines={4} className="text-sm  text-secondary_foreground">
                  {item.description}
                </Text>
              </CardContent>
              <CardFooter className=" flex-row justify-start items-center  py-1 gap-2 border-t border-border">
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
                    {item.uploadDate}
                  </CardTitle>
                </View>
              </CardFooter>
            </Card>
          ))}
      </View>
        </ScrollView>
    </View>
  );
};

export default Circular;
