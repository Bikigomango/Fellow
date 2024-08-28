import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

interface ScreenObject {
  one: React.ComponentType<any>; // Expecting a React component
  two: React.ComponentType<any>;
  three: React.ComponentType<any>;
  four: React.ComponentType<any>;
}

interface ScreensProps {
  Screen: ScreenObject; // Single ScreenObject containing components
}

const Index = ({ Screen }: ScreensProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: {
              fontSize: 12,
              textTransform: 'none',
              fontWeight: 'bold'
            },
            tabBarItemStyle: {
              flex: 1, // Ensures tabs take up equal width
              justifyContent: 'center', // Centers the text within each tab
            },
            tabBarIndicatorStyle: {
              backgroundColor: 'purple', // Color of the indicator (border)
              height: 1, // Height of the border
            },
            tabBarStyle: {
              backgroundColor: 'white',
              elevation: 0,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              borderBottomColor:'lightgray',
              borderBottomWidth :1

            },
          }}
        >
          <Tab.Screen name="Overview" component={Screen.one} />
          <Tab.Screen name="Attendance" component={Screen.two} />
          <Tab.Screen name="Notes" component={Screen.three} />
          <Tab.Screen name="Assignments" component={Screen.four} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Index;
