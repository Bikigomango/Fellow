import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { CalendarDays, Clock, SlidersHorizontal } from "lucide-react-native";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/CardPercent";
import Modal from "../../components/ui/modal";
import CenterModal from "../../components/ui/CenterModal";

// Define the types for your event data
interface Event {
  eventName: string;
  startDate: { day: number; month: number; year: number };
  endDate: { day: number; month: number; year: number };
  startTime: string;
  endTime: string;
  color: string;
}

const Trying = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [filteredArray, setFilteredArray] = useState<Event[]>([]); // State for filtered events
  const [loading, setLoading] = useState<boolean>(false); // State for loading
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({}); // State for marked dates
  const [modalEvent, setModalEvent] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Example array of event types
  const data = ["Holiday", "Exam Schedule", "Opportunities", "Events"];

  // Convert month number to string names
  const getMonthName = (monthNumber: number) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[monthNumber - 1]; // monthNumber is 1-based, so subtract 1
  };

  // Colors of the event cards
  enum Colors {
    EXAMS = "#FCE4E4",
    HOLIDAY = "#E3E8F7",
    EVENTS = "#E4F4E3",
    OPPORTUNITIES = "#FDFCE7",
  }

  // User data
  const UserData: Event[] = [
    {
      eventName: "SportEvent",
      startDate: { day: 1, month: 1, year: 2024 },
      endDate: { day: 2, month: 1, year: 2024 },
      startTime: "11:30 AM",
      endTime: "01:30 PM",
      color: Colors.EVENTS,
    },
    {
      eventName: "SportEvent",
      startDate: { day: 1, month: 8, year: 2024 },
      endDate: { day: 1, month: 8, year: 2024 },
      startTime: "11:30 AM",
      endTime: "01:30 PM",
      color: Colors.EVENTS,
    },
    {
      eventName: "MusicConcert",
      startDate: { day: 23, month: 8, year: 2024 },
      endDate: { day: 29, month: 8, year: 2024 },
      startTime: "07:00 PM",
      endTime: "09:00 PM",
      color: Colors.EVENTS,
    },
    {
      eventName: "TechConference",
      startDate: { day: 10, month: 12, year: 2024 },
      endDate: { day: 12, month: 1, year: 2025 },
      startTime: "09:00 AM",
      endTime: "04:00 PM",
      color: Colors.OPPORTUNITIES,
    },
    {
      eventName: "ArtExhibition",
      startDate: { day: 22, month: 8, year: 2024 },
      endDate: { day: 22, month: 8, year: 2024 },
      startTime: "02:00 PM",
      endTime: "05:00 PM",
      color: Colors.HOLIDAY,
    },
    {
      eventName: "ArtExhibition",
      startDate: { day: 22, month: 9, year: 2024 },
      endDate: { day: 22, month: 9, year: 2024 },
      startTime: "02:00 PM",
      endTime: "05:00 PM",
      color: Colors.OPPORTUNITIES,
    },
    {
      eventName: "Mahatma Gandhi Jayanti",
      startDate: { day: 28, month: 9, year: 2024 },
      endDate: { day: 1, month: 10, year: 2024 },
      startTime: "08:00 AM",
      endTime: "11:00 AM",
      color: Colors.HOLIDAY,
    },
    {
      eventName: "Independance Day",
      startDate: { day: 5, month: 8, year: 2024 },
      endDate: { day: 5, month: 8, year: 2024 },
      startTime: "08:00 AM",
      endTime: "11:00 AM",
      color: Colors.HOLIDAY,
    },
  ];

  // Function to generate marked dates
  const generateMarkedDates = (events: Event[]): { [key: string]: any } => {
    const markedDates: { [key: string]: any } = {};

    events.forEach((event) => {
      const startDate = `${event.startDate.year}-${String(
        event.startDate.month
      ).padStart(2, "0")}-${String(event.startDate.day).padStart(2, "0")}`;
      const endDate = `${event.endDate.year}-${String(
        event.endDate.month
      ).padStart(2, "0")}-${String(event.endDate.day).padStart(2, "0")}`;

      console.log(startDate, endDate);

      // Single-day event
      if (startDate === endDate) {
        markedDates[startDate] = {
          startingDay: true,
          endingDay: true,
          color: event.color,
        };
      } else {
        // Multi-day event
        markedDates[startDate] = { startingDay: true, color: event.color };
        markedDates[endDate] = { endingDay: true, color: event.color };

        // Mark days in between
        let currentDate = new Date(
          event.startDate.year,
          event.startDate.month - 1,
          event.startDate.day
        );
        const endDateObj = new Date(
          event.endDate.year,
          event.endDate.month - 1,
          event.endDate.day
        );

        while (currentDate < endDateObj) {
          const dateKey = `${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
          ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(
            2,
            "0"
          )}`;
          if (!markedDates[dateKey]) {
            markedDates[dateKey] = { color: event.color };
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
    });

    return markedDates;
  };

  // Function to find events with delay
  const findEventWithDelay = (
    currentMonth: number,
    currentYear: number
  ): Promise<Event[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundEvents = UserData.filter(
          (event) =>
            event.startDate.month === currentMonth &&
            event.startDate.year === currentYear
        );
        resolve(foundEvents); // Resolve with the found events
      }, 10); // Adjust the delay as needed
    });
  };

  // Handle month change
  const handleMonthChange = (date: { month: number; year: number }) => {
    filteredArray.length = 0;
    setLoading(true); // Start loading

    findEventWithDelay(date.month, date.year)
      .then((datas) => {
        setFilteredArray(datas); // Update state
        setMarkedDates(generateMarkedDates(datas)); // Update marked dates
        setLoading(false); // Stop loading
        console.log(datas);
      })
      .catch((error) => {
        setLoading(false); // Stop loading on error
        console.error("Error:", error);
      });
  };

  // Fetch events for the current month and year when the component mounts
  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Months are 0-based, so add 1
    const currentYear = today.getFullYear();

    setLoading(true); // Start loading

    findEventWithDelay(currentMonth, currentYear)
      .then((datas) => {
        setFilteredArray(datas); // Update state
        setMarkedDates(generateMarkedDates(datas)); // Update marked dates
        setLoading(false); // Stop loading
        console.log(datas);
      })
      .catch((error) => {
        setLoading(false); // Stop loading on error
        console.error("Error:", error);
      });
  }, []);

  // No event component
  const NoEvent = () => (
    <View className="flex-1 h-32 items-center justify-center">
      <Text className="text-xs text-slate-400 font-medium">No Events</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView style={{ position: "relative" }}>
        <View className="px-4 gap-10 mt-10">
          <View>
            <Text className="text-secondary_foreground font-medium text-sm">
              Complete overview of all the upcoming events and special
              activities
            </Text>
          </View>

          <Calendar
            style={{
              borderRadius: 10,
              elevation: 4,
              fontSize: 12,
              height: "auto",
            }}
            onDayPress={(date: Object) => console.log(date)}
            onMonthChange={handleMonthChange}
            enableSwipeMonths={true}
            theme={{
              backgroundColor: "#00adf5",
              arrowColor: "black",
              textDayFontSize: 12,
              textMonthFontSize: 14,
              textDayHeaderFontSize: 12,
            }}
            markingType={"period"}
            markedDates={markedDates} // Pass the markedDates state here
          />
        </View>

        {/* Container for content and activity indicator */}
        <View style={styles.contentContainer}>
          {/* Show activity indicator while loading */}
          {loading && (
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color="#00adf5"
            />
          )}

          <View className="px-4 mt-5 flex-col gap-5">
            <View className="flex-row justify-between items-center">
              <Text className="font-medium text-sm text-secondary_foreground">
                My Events and Activities
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <SlidersHorizontal color={"black"} width={20} height={16} />
              </TouchableOpacity>
            </View>
            <Modal
              isVisible={modalVisible}
              onClose={() => setModalVisible(false)}
              data={data}
              onSelect={(item) => setSelectedItem(item)}
              selectedItem={selectedItem}
              headingClassName="items-start"
              modalClassName="bg-white h-auto"
              listItemClassName="text-black"
              iconColor="gray"
            />

            <View className="flex-col gap-5 pb-5">
              {filteredArray.length === 0 && !loading ? (
                <NoEvent />
              ) : (
                filteredArray.map((item, index) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelectedEvent(item); // Set the selected event
                      setModalEvent(true); // Open the modal
                    }}
                  >
                    <Card
                      className={`w-full flex-col h-20 py-3 px-6`}
                      style={{ backgroundColor: item.color }}
                    >
                      <Text className="text-sm font-semibold">
                        {item.eventName}
                      </Text>
                      <CardContent className="p-0 flex-row gap-3">
                        <View className="flex-row gap-1.5 items-center flex-1 pr-3">
                          <CalendarDays color={"black"} size={14} />
                          <Text
                            numberOfLines={1}
                            className="text-xs w-full font-normal text-secondary_foreground pr-1 flex-1"
                          >
                            {getMonthName(item.startDate.month)},{" "}
                            {item.startDate.day}{" "}
                            {item.startDate.year === item.endDate.year
                              ? ""
                              : item.startDate.year}
                            -
                            {item.startDate.month === item.endDate.month
                              ? ""
                              : `${getMonthName(item.endDate.month)},`}{" "}
                            {item.endDate.day} {item.endDate.year}
                          </Text>
                        </View>
                        <View className="flex-row gap-1.5 items-center flex-1">
                          <Clock color={"black"} size={14} />
                          <Text
                            numberOfLines={1}
                            className="text-xs font-normal text-secondary_foreground flex-1"
                          >
                            {item.startTime}-{item.endTime}
                          </Text>
                        </View>
                      </CardContent>
                    </Card>
                  </Pressable>
                ))
              )}

              {/* ///  THIS IS THE CENTER DETAILED MODEL TO SHOW THE EVENTS DETAIL */}

              {modalEvent && selectedEvent && (
                <>
               {console.log("Selected Event:", selectedEvent)} 
                <CenterModal
                  isVisible={modalEvent}
                  onClose={() => setModalEvent(false)}
                  eventDetail={{
                    eventName: selectedEvent.eventName,
                    startDate: `${selectedEvent.startDate.day}/${selectedEvent.startDate.month}/${selectedEvent.startDate.year}`,
                    endDate: `${selectedEvent.endDate.day}/${selectedEvent.endDate.month}/${selectedEvent.endDate.year}`,
                    startTime: selectedEvent.startTime,
                    endTime: selectedEvent.endTime,
                    color:selectedEvent.color,
                  }}
                />
                </>
                
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    position: "relative",
  },
  loader: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Trying;
