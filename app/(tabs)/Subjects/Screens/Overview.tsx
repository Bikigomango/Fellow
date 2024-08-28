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

const Overview = () => {
  return (
    <View className="flex-1 pt-6 px-4">

        {/* THIS IS CARD WITH PROGRESS BAR */}

      <Card className="p-3 gap-5 ">
        <CardHeader className="py-0">
          <CardTitle className="text-xl">Overall Sessions</CardTitle>
        </CardHeader>
        <CardHeader className="flex-row py-0 gap-2 items-center">
          <CardTitle className="text-2xl p-0">15/30</CardTitle>
          <CardTitle className="font-medium p-0">(50%)</CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col justify-start items-start gap-2 ">
          <CardDescription className="text-secondary_foreground">
            Completed Sessions by Overall sessions
          </CardDescription>
          <View className="w-full h-fit bg-secondary rounded-full mt-3">
          <Progress value={50} asChild={true} indicatorClassName="bg-black h-2" />
          </View>
        </CardFooter>
      </Card>
    </View>
  );
};

export default Overview;
