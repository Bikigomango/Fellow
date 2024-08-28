import "../../global.css";
import {
  Animated,
  Dimensions,
  Modal,
  Pressable,
  Text as RNText,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NavigationContainer,
  Theme,
  ThemeProvider,
  useIsFocused,
} from "@react-navigation/native";
import { Link, router, SplashScreen, Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform } from "react-native";
import { NAV_THEME } from "../../lib/constants";
import { useColorScheme } from "../../lib/useColorScheme";
import { Button } from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tabs } from "expo-router";
import { Image } from "expo-image";

import { useNavigation } from "@react-navigation/native";


import {
  Bell,
  House,
  Layers,
  CalendarClock,
  Paperclip,
  CircleUserRound,
  AlignRight,
  LibraryBig,
  ClockArrowUp,
  CalendarDays,
  Table2,
  ShieldCheck,
} from "lucide-react-native";
import Select from "@/components/ui/select";
import { useState } from "react";


const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};

const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

const institueName = "KSIT";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const { width } = Dimensions.get("window");

export default function RootLayout() {
  const navigation = useNavigation();

  const pathname = usePathname(); //////  HERE IS THE PATHNAME CODE
  const shouldShowDashboard =
    pathname === "/Home" ||
    pathname === "/Subjects" ||
    pathname === "/Sessions" ||
    pathname === "/Circular";

  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  ////  states for side drawer
  const [modalVisible, setModalVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-width));

  React.useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem("theme");
      if (Platform.OS === "web") {
        document.documentElement.classList.add("bg-background");
      }
      if (!theme) {
        AsyncStorage.setItem("theme", colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === "dark" ? "dark" : "light";
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);
    })().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  /////    for  side drawer
  const openDrawer = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0, // Slide the drawer to its final position
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: -width, // Slide the drawer back out of view
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false)); // Close the modal after the animation finishes
  };

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        {shouldShowDashboard && (
          <View className="flex flex-row items-center justify-between bg-white pb-6 px-4">
            <Image
              style={{ height: 46, width: 46 }}
              source={require("../../assets/images/rocket.png")}
              contentFit="contain"
              transition={500}
            />
            <View className="flex flex-row items-center gap-2">
              <RNText className="text-xl">{institueName}</RNText>
              <RNText
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: "black",
                  borderRadius: 100,
                  marginTop: 4,
                }}
              ></RNText>
              <Select
                className="border-0 bg-transparent gap-2 pl-0"
                iconColor={""}
                TitleClassName={"font-bold text-xl"}
                ListItemClassNames={""}
                ModalClassName={""}
                data={[
                  "1st sem",
                  "2nd sem",
                  "3rd sem",
                  "4th sem",
                  "5th sem",
                  "6th sem",
                ]}
                heading={""}
                headingClassName={""}
              />
            </View>
            <Pressable onPress={openDrawer}>
              <AlignRight size={24} color="black" />
            </Pressable>

            <Modal
              transparent={true}
              visible={modalVisible}
              onRequestClose={closeDrawer}
              style={{ width: 320 }}
            >
              <TouchableOpacity style={styles.overlay} onPress={closeDrawer} />
              <Animated.View
                className="rounded-l-lg rounded-r-lg"
                style={[
                  styles.drawer,
                  { transform: [{ translateX: slideAnim }] },
                ]}
              >
                {/* THIS IS THE SIDE DRAWER COMPONENT */}

                <View className="flex-row gap-3 w-full px-4 py-8 items-start border-b border-border">
                  <Image
                    style={{ height: 36, width: 36 }}
                    source={require("../../assets/images/rocket.png")}
                    contentFit="contain"
                    transition={300}
                  />
                  <View style={{ flex: 1 }}>
                    <RNText className="text-base font-semibold">Menu</RNText>
                    <RNText className="text-xs font-normal text-secondary_foreground">
                      Explore more features to enhance your experience.
                    </RNText>
                  </View>
                </View>
                <View className="ListOfTheMenu px-6 py-8 gap-3">
                  {/* THIS IS THE LIST OF THE LIST OF MENU  */}
                  {/* NOTIFICATIONS */}
                  <TouchableOpacity
                    // style={styles.touchable}
                    activeOpacity={0.2} // Controls the opacity of the touchable component when pressed
                    // onPress={()=> navigation.navigate(Notification)}
                  >
                    <Link href="../../component/MenuBarComponent/navigation">
                    
                    <View className="flex-row gap-3 py-3 px-2 items-center">
                      <Bell color={"gray"} size={20} />
                      <RNText className="text-sm font-normal">
                        Notification
                      </RNText>
                    </View>
                    </Link>
                  </TouchableOpacity>

                  {/* ALL SUBJECT MARKS */}

                  <TouchableOpacity
                    // style={styles.touchable}
                    activeOpacity={0.2} // Controls the opacity of the touchable component when pressed
                  >
                    <View className="flex-row gap-3 py-3 px-2 items-center">
                      <LibraryBig color={"gray"} size={20} />
                      <RNText className="text-sm font-normal">
                        All Subject Marks
                      </RNText>
                    </View>
                  </TouchableOpacity>

                  {/* AExam schedule */}

                  <TouchableOpacity
                    // style={styles.touchable}
                    activeOpacity={0.2} // Controls the opacity of the touchable component when pressed
                  >
                    <View className="flex-row gap-3 py-3 px-2 items-center">
                      <ClockArrowUp color={"gray"} size={20} />
                      <RNText className="text-sm font-normal">
                        Exam Schedule
                      </RNText>
                    </View>
                  </TouchableOpacity>

                  {/*Calender events */}

                  <TouchableOpacity
                    // style={styles.touchable}
                    activeOpacity={0.2} // Controls the opacity of the touchable component when pressed
                  >
                    <View className="flex-row gap-3 py-3 px-2 items-center">
                      <CalendarDays color={"gray"} size={20} />
                      <RNText className="text-sm font-normal">
                        Calendar Events
                      </RNText>
                    </View>
                  </TouchableOpacity>

                  {/* ALL SUBJECT MARKS */}

                  <TouchableOpacity
                    // style={styles.touchable}
                    activeOpacity={0.2} // Controls the opacity of the touchable component when pressed
                  >
                    <View className="flex-row gap-3 py-3 px-2 items-center">
                      <Table2 color={"gray"} size={20} />
                      <RNText className="text-sm font-normal">
                        Time Table
                      </RNText>
                    </View>
                  </TouchableOpacity>

                  {/* ALL SUBJECT MARKS */}
                  <TouchableOpacity
                    // style={styles.touchable}
                    activeOpacity={0.2} // Controls the opacity of the touchable component when pressed
                  >
                    <View className="flex-row gap-3 py-3 px-2 items-center">
                      <ShieldCheck color={"gray"} size={20} />
                      <RNText className="text-sm font-normal">
                        Privacy Policies
                      </RNText>
                    </View>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </Modal>
          </View>
        )}
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "white",
              paddingVertical: 6,
              height: 58,
            },
            tabBarShowLabel: false,
          }}
        >
          <Tabs.Screen
            name="Home"
            options={{
              tabBarActiveTintColor: "black",
              tabBarLabelStyle: {
                borderWidth: 4,
                borderBlockColor: "black",
              },
              tabBarIcon: ({ color }) => <House size={22} color={color} />,
            }}
          />
          <Tabs.Screen
            name="Subjects"
            options={{
              tabBarActiveTintColor: "black",
              tabBarIcon: ({ color }) => <Layers size={22} color={color} />,
            }}
          />
          <Tabs.Screen
            name="Sessions"
            options={{
              tabBarActiveTintColor: "black",
              tabBarIcon: ({ color }) => (
                <CalendarClock size={22} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Circular"
            options={{
              tabBarActiveTintColor: "black",
              tabBarIcon: ({ color }) => <Paperclip size={22} color={color} />,
            }}
          />
          <Tabs.Screen
            name="Profile"
            options={{
              tabBarActiveTintColor: "black",
              tabBarIcon: ({ color }) => (
                <CircleUserRound size={22} color={color} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    elevation: 2,
  },
  title: {
    fontSize: 20,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 300,
    height: "100%",
    backgroundColor: "#fff",
    // padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    overflow: "hidden", // Add this line
  },

  drawerText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonClose: {
    padding: 10,
    backgroundColor: "#d9534f",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  touchable: {
    // backgroundColor: 'gray', // Gray background color on press
    borderRadius: 4, // Optional: add border radius for rounded corners
  },
  
});
