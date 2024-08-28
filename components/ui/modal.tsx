import { View, Text, ScrollView, TouchableOpacity, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-native-modal";
import { ChevronUp, ChevronDown, SquareCheck } from "lucide-react-native";
import { cn } from "@/lib/utils";

interface ModalComponentProps {
  isVisible: boolean;
  onClose: () => void;
  data: string[];
  onSelect: (item: string) => void;
  selectedItem: string;
  heading?: string;
  headingClassName?: string;
  modalClassName?: string;
  listItemClassName?: string;
  iconColor?: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isVisible,
  onClose,
  data,
  onSelect,
  selectedItem,
  heading,
  headingClassName,
  modalClassName,
  listItemClassName,
  iconColor,
}) => {
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (selectOpen && scrollViewRef.current) {
      const index = data.indexOf(selectedItem);
      if (index >= 0) {
        scrollViewRef.current.scrollTo({
          y: index * 43,
          animated: true,
        });
      }
    }
  }, [selectOpen, selectedItem]);

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      animationInTiming={400}
      animationOut="slideOutDown"
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      backdropColor='gray'
      className="mb-0 w-full flex-1"
      style={{ marginBottom: 0, marginLeft: 0 }}
    >
      <View className={cn('w-full h-96 absolute bottom-0 left-0 elevation-4 right-0 px-3 py-2 rounded-t-md border bg-white border-secondary shadow-2xl', modalClassName)}>
        <View className="flex-row items-center justify-center pb-2">
          <Text className="w-16 h-0.5 rounded-full bg-secondary_foreground"></Text>
        </View>
        <View className={cn('items-center pb-4')}>
          <Text className={cn('text-primary font-bold text-lg pl-3', headingClassName)}>{heading}</Text>
        </View>

        <ScrollView
          className="w-full h-full"
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
        >
          {data.map((item, index) => (
            <Pressable
              key={index}
              className={cn(`mt-1 flex flex-row items-center justify-between px-3 rounded-md ${selectedItem === item ? 'bg-primary_foreground' : ''}`)}
              onPress={() => {
                onSelect(item);
                setSelectOpen(false);
              }}
            >
              <Text className={cn(`py-3 text-base font-normal ${selectedItem === item ? 'font-semibold' : ''}`, listItemClassName)}>{item}</Text>
              {selectedItem === item && <SquareCheck size={20} color={'black'} />}
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalComponent;
