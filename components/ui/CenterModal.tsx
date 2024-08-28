import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Bell, CircleX, MapPin, Paperclip, Rows4, Users } from "lucide-react-native";

interface EventDetailModalProps {
  isVisible: boolean;
  onClose: () => void;
  eventDetail: {
    eventName: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    color: string;
  };
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({
  isVisible,
  onClose,
  eventDetail,
}) => {
  console.log(eventDetail.color);
  return (
    <Modal
      isVisible={isVisible}
      backdropColor="gray"
      backdropOpacity={0.5} // Adjust backdrop opacity as needed
      animationInTiming={400}
      animationOut="bounceOutDown"
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal} // This makes sure the modal covers the full screen
    >
      <View className="flex-1 justify-center  items-center p-5">
        <View className="w-full p-5 bg-white rounded-md gap-6">
          <View className="flex-row justify-between">
            <View className=" flex-1 flex-row items-start justify-between">
              <View className="flex-row gap-2 items-center">
                <View
                  style={{
                    backgroundColor: eventDetail.color,
                    width: 20,
                    height: 20,
                  }}
                ></View>
                <View>
                  <Text className="text-base font-semibold">
                    {eventDetail.eventName}
                  </Text>
                  <Text className="text-sm font-medium">
                    June 1, Wednesday, From 10:30 AM to 12:00 PM
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={onClose}
                className="items-start justify-start"
              >
                <CircleX size={16} color={"black"} />
              </TouchableOpacity>
            </View>
          </View>

          {/* ////   BELOW COMPONENT */}

          <View className="flex-row gap-2">
            <Users size={16} color={"black"} />
            <Text className="text-sm font-medium">
              Computer science / Semester 1 / Section A / Batch A
            </Text>
          </View>

          {/* ////    COLLEGE ADDRESES */}

          <View className="flex-row gap-2">
            <MapPin size={16} color={"black"} />
            <View>
              <Text className="text-sm font-medium">KSIT</Text>
              <Text className="text-sm font-medium text-secondary_foreground">
                Kanakapura Rd, Raghuvanahalli, Subramanyapura, Bengaluru,
                Karnataka
              </Text>
            </View>
          </View>

          {/* ////    LANDMARK AREA */}

          <View className="flex-row gap-2">
            <MapPin size={16} color={"black"} />
            <Text className="text-sm font-medium ">
              Seminar hall 4th floor Room no. LH-1
            </Text>
          </View>

          {/* ////  INFORMATION */}

          <View className="flex-row gap-2">
            <Rows4 size={16} color={"black"} />
            <Text className="text-sm font-medium ">
              Join us for an immersive workshop on Cloud Computing Essentials..
            </Text>
          </View>

          {/* ////  DOCUMENT ATTACHED */}

          <View className="flex-row gap-2">
            <Paperclip size={16} color={"black"} />
            <Text className="text-sm font-medium "></Text>
          </View>

          {/* /// UPLOAD TIMINGS */}

          <View className="flex-row gap-2">
            <Bell size={16} color={"black"} />
            <Text className="text-sm font-medium text-secondary_foreground">
            Uploaded 5 mins ago
            </Text>
          </View>

          {/* ////  UPLOADED BY  */}
          <View className="flex-row gap-2">
            <Users size={16} color={"black"} />
            <Text className="text-sm font-medium">
              Narayan R
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    margin: 0, // Ensures the modal covers the full screen
  },
  //   modalOverlay: {
  //     flex: 1,
  //     justifyContent: 'left',
  //     alignItems: 'center',
  //   },
  //   modalContent: {
  //     width: '80%',
  //     backgroundColor: 'white',
  //     borderRadius: 10,
  //     padding: 20,
  //     alignItems: 'center',
  //   },
  eventName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 14,
    marginBottom: 5,
  },
  eventTime: {
    fontSize: 14,
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#00adf5",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EventDetailModal;
