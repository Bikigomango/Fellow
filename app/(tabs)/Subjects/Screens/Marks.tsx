import { View, Text } from "react-native";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/CardPercent";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

const UserData = [
  {
    testName: "Written test 1",
    testFullMark: 30,
    scoredMark: 23,
    status: "P",
  },
  {
    testName: "Written test 2 ",
    testFullMark: 100,
    scoredMark: 79,
    status: "F",
  },
  {
    testName: "Practical test 1",
    testFullMark: 30,
    scoredMark: 13,
    status: "F",
  },
  {
    testName: "Written test 1",
    testFullMark: 30,
    scoredMark: 23,
    status: "P",
  },
  {
    testName: "Written test 2",
    testFullMark: 30,
    scoredMark: 13,
    status: "F",
  },
  {
    testName: "Practical test 1",
    testFullMark: 30,
    scoredMark: 13,
    status: "F",
  },
  {
    testName: "Written test 1",
    testFullMark: 30,
    scoredMark: 23,
    status: "P",
  },
  {
    testName: "Written test 2",
    testFullMark: 30,
    scoredMark: 13,
    status: "F",
  },
  {
    testName: "Practical test 1",
    testFullMark: 30,
    scoredMark: 13,
    status: "F",
  },
  {
    testName: "Written test 1",
    testFullMark: 30,
    scoredMark: 23,
    status: "P",
  },
  {
    testName: "Written test 2",
    testFullMark: 30,
    scoredMark: 13,
    status: "F",
  },
  {
    testName: "Practical test 1",
    testFullMark: 30,
    scoredMark: 13,
    status: "F",
  },
];

const Overview = () => {
  const Pass = () => {
    return (
      <View className="w-6 h-6 bg-[#34C759] opacity-15 border border-[#34C759] rounded items-center justify-center">
        <Text className="text-green-900">P</Text>
      </View>
    );
  };

  const Fail = () => {
    return (
      <View className="w-6 h-6 bg-[#FF3B30] opacity-15 border border-[#FF3B30] rounded items-center justify-center">
        <Text className="text-red-900 ">F</Text>
      </View>
    );
  };

  return (
    <View className="flex-1 mt-8 px-4">
      <View className="mb-8">
        <Input placeholder="Search" className="h-12 bg-primary_foreground" />
      </View>
      <View className="flex-col gap-1">
        <Text className="text-base font-semibold">Marks</Text>
        <Text className="text-xs font-normal text-secondary_foreground">
          Insights Into Your Acadamic Progress
        </Text>
      </View>

      {/* THIS IS CARD WITH PROGRESS BAR */}
      <GestureHandlerRootView>
      <ScrollView className="mt-6" showsVerticalScrollIndicator={false}>
        <View className="flex-col gap-4 pb-10">
          {UserData.map((item, index) => (
            <Card className="px-4 py-3 gap-5 border-border" key={index}>
              <CardContent className="flex-row justify-between items-center">
                <CardTitle className="text-sm font-medium w-40 ">
                  {item.testName}
                </CardTitle>
                <CardTitle className="text-sm font-normal items-start justify-start">
                  {item.scoredMark}/{item.testFullMark}
                </CardTitle>
                {item.status === "P" ? <Pass /> : <Fail />}
              </CardContent>
            </Card>
          ))}
        </View>
      </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
};

export default Overview;
