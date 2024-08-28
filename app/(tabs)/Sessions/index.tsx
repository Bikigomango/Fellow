import { View, Text } from "react-native";
import React from "react";
import Select from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DateCard, DateItem } from "@/components/ui/dateList";

const Sessions = () => {





  const sampleData = [
    { date: '01', day: 'Mon' },
    { date: '02', day: 'Tue' },
    { date: '03', day: 'Wed' },
    { date: '04', day: 'Thur' },
    { date: '05', day: 'Fri' },
    { date: '06', day: 'Sat' },
    { date: '07', day: 'Sun' },
    { date: '08', day: 'Mon' },
    { date: '09', day: 'Tue' },
    { date: '10', day: 'Wed' },
    { date: '11', day: 'Thur' },
];





  return (
    <View className="px-4 py-4">
      <View className="pb-6">
        <Text className="text-lg font-semibold">Sessions</Text>
        <Text className="text-sm text-secondary_foreground font-medium">
          View Your Academic Sessions Seamlessly
        </Text>
      </View>
      <View  className="flex-row pb-6">
        <View style={{ flexDirection: "row", width: "33.3%" }}>
          <Select
            className="w-full backdrop-hue-rotate-180"
            iconColor={""}
            TitleClassName={"text-secondary_foreground font-normal"}
            ListItemClassNames={""}
            ModalClassName={""}
            data={[
              "July, 2024",
              "Aug, 2024",
              "Sep, 2024",
              "Oct ,2024",
              "Nov, 2024",
              "Dec, 2024",
            ]}
          />
        </View>
        <View style={{ width: "33.33%"}}></View>
        <View style={{ width: "33.33%" }}>
          <Button variant={"outline"} size={'md'} className="bg-primary_foreground p-1" textClassName={""}>
            <Text className="font-normal">Today</Text>
          </Button>
        </View>
      </View>
      <View>
      <DateCard >
            <DateItem className="p-2" TextFirstClassName="text-sm" TextSecondClassName="text-sm"  data={sampleData}/>
           </DateCard>
      </View>
            




    </View>
  );
};

export default Sessions;
