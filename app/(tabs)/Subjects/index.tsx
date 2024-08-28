import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CircleUserRound } from "lucide-react-native";



import {router , useLocalSearchParams} from "expo-router";

type Color = 'purple' | 'yellow' | 'orange' | 'blue' | 'red' | 'cyan';

const colorClasses:Record<Color , string> = {
  purple: "bg-purple-200",
  yellow: "bg-yellow-200",
  orange: "bg-orange-200",
  blue: "bg-blue-200",
  red: "bg-red-200",
  cyan: "bg-cyan-200",
};

const UserData = [
  { sub: "Mathamatics", subId: "10HE40", teacher: "Narayan R", color: "red" , des:'Exploring the Beauty of Patterns and Numbers'},
  { sub: "Science", subId: "HG64732", teacher: "Narayan R", color: "orange",des:'Exploring the Beauty of Patterns and Numbers' },
  { sub: "English", subId: "KLD7648", teacher: "Narayan R", color: "blue" ,des:'Exploring the Beauty of Patterns and Numbers'},
  { sub: "Chemistry", subId: "10HE40", teacher: "Narayan R", color: "cyan" ,des:'Exploring the Beauty of Patterns and Numbers'},
  { sub: "Biology", subId: "BV67V2", teacher: "Narayan R", color: "purple" ,des:'Exploring the Beauty of Patterns and Numbers'},
  { sub: "Botany", subId: "XZ40156", teacher: "Narayan R", color: "red",des:'Exploring the Beauty of Patterns and Numbers' },
  { sub: "Vocabulary", subId: "10HE40", teacher: "Narayan R", color: "orange",des:'Exploring the Beauty of Patterns and Numbers' },
  { sub: "IT skills", subId: "QW60001", teacher: "Narayan R", color: "blue",des:'Exploring the Beauty of Patterns and Numbers' },
  {
    sub: "Project Management",
    subId: "10HE40",
    teacher: "Narayan R",
    color: "cyan",
    des:'Exploring the Beauty of Patterns and Numbers'
  },
  {
    sub: "Computer Lab",
    subId: "10HE40",
    teacher: "Narayan R",
    color: "purple",
    des:'Exploring the Beauty of Patterns and Numbers'
  },
  {
    sub: "Graphics Design",
    subId: "10HE40",
    teacher: "Narayan R",
    color: "red",
    des:'Exploring the Beauty of Patterns and Numbers'
  },
];

const Subjects = () => {




  const RoutingFile = (item:number) => {
    router.push({
      pathname: './Subjects/SubjectDetails',
      params: {
        sub : UserData[item].sub,
        des : UserData[item].des,
        color : UserData[item].color,
      }
      
    });
      
  }


  return (
    <View className="px-4 py-4" >
      <View className="pb-6">
        <Text className="text-lg font-semibold">Subjects</Text>
        <Text className="text-sm text-secondary_foreground font-medium">
          Explore All Your Academic Subjects
        </Text>
      </View>
      <View className="pb-2">
        <Input
          placeholder="Search by subject name or Id ..."
          className="h-12 bg-primary_foreground"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-col gap-3 pt-6 pb-44">
        {UserData.map((item , index) => (
          <Pressable key={index}  onPress={()=>RoutingFile(index)}>
            <Card className="w-full bg-primary_foreground gap-6 px-5 py-3">
              <CardHeader className="gap-3 flex-row items-center p-0">
                <Text className={`w-3.5 h-3.5 rounded-full ${colorClasses[item.color as Color]}`}></Text>
                <CardTitle className="text-md">{item.sub}</CardTitle>
                <CardTitle className="text-md font-normal text-secondary_foreground">
                  {item.subId}
                </CardTitle>
              </CardHeader>
              <CardFooter className="justify-start p-0 gap-3">
                <CircleUserRound color={"black"} size={14} />
                <CardTitle className="text-md font-normal text-secondary_foreground">
                  Narayan R
                </CardTitle>
              </CardFooter>
            </Card>
            </Pressable>
        ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Subjects;
