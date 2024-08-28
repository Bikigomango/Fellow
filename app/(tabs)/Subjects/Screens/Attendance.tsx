import { View, Text } from "react-native";
import React from "react";
import Select from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/CardPercent";

const Attendance = () => {
  return (
    <View className="pt-6 px-4">
      <View>
        <Text className="text-lg font-semibold">Attendance</Text>
        <Text className="text-sm font-normal text-secondary_foreground">
          View your monthly attendance overview
        </Text>
      </View>

      <View className="pt-6">
        <Select
          className="w-[132] bg-white"
          iconColor={""}
          TitleClassName={"text-secondary_foreground"}
          ListItemClassNames={""}
          ModalClassName={""}
          data={["July, 2024", "Aug, 2024"]}
        />
      </View>

      {/* THIS IS THE PERCENTAGE CARD  */}

      <View className="pt-6">
        <Card className="w-52 px-3 py-3 gap-2">
          <CardHeader className="p-0">
            <CardTitle className="p-0 text-xl">69%</CardTitle>
          </CardHeader>
          <CardFooter className="p-0">
            <CardTitle className="p-0 text-md text-secondary_foreground">
              Total Sessions - 100
            </CardTitle>
          </CardFooter>
          <CardFooter className="p-0">
            <CardTitle className="p-0 text-md text-secondary_foreground">
              Sessions Present - 69
            </CardTitle>
          </CardFooter>
        </Card>
      </View>
    </View>
  );
};

export default Attendance;
