import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Assignments from "./Screens/Assignments";
import Attendance from "./Screens/Attendance";
import Notes from "./Screens/Notes";
import Marks from "./Screens/Marks";
import Overview from "./Screens/Overview";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

const SubjectDetails = () => {
  const { sub, des, color } = useLocalSearchParams();

  return (
    <>
      <View className="pt-8 px-4 pb-6">
        <View className="flex-row items-center gap-7">
          <Text className={`w-11 h-11 bg-${color}-200 rounded-full`}></Text>
          <View className="flex-col gap-0.5">
            <Text className="text-lg font-semibold">{sub}</Text>
            <Text className="text-sm text-secondary_foreground">{des}</Text>
          </View>
        </View>
      </View>
      <Tab.Navigator
      style={{paddingHorizontal:0}}
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 ,textTransform: 'none', },
          tabBarItemStyle: {  height:40 },
          tabBarStyle: {
            backgroundColor: "white",
            width:'100%',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0.5,
             borderBottomColor:'lightgray',
              display:'flex',
              justifyContent: 'center',
          },
          tabBarIndicatorStyle: {
            backgroundColor: "purple", 
            height: 2,
            borderRadius: 50,
          },
        }}
      >
         <Tab.Screen name="Overview" component={Overview} options={{ tabBarLabel: 'Overview' }} />
  <Tab.Screen name="Attendance" component={Attendance} options={{ tabBarLabel: 'Attendance' }} />
  <Tab.Screen name="Marks" component={Marks} options={{ tabBarLabel: 'Marks' }} />
      </Tab.Navigator>
    </>
  );
};

export default SubjectDetails;
