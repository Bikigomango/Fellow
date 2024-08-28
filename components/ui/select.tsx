import { View, Text, TouchableOpacity , ScrollView, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { ChevronUp, SquareCheck } from "lucide-react-native";
import { ChevronDown } from "lucide-react-native";
import { cn } from "@/lib/utils";
import Modal from "react-native-modal";

interface SelectProps
  extends React.ComponentProps<typeof View & TouchableOpacity> {
  iconColor: string;
  TitleClassName: string;
  ListItemClassNames:string;
  ModalClassName:string;
  data: string[];
  heading:string;
  headingClassName:string;
}

  const Select = ({ className, children, iconColor,TitleClassName,ListItemClassNames, ModalClassName,data,heading,headingClassName, ...props }: SelectProps) => {

    const [selectedItem, setSelectedItem] = useState<string>(data[0]);
    const [selectOpen, setSelectClose] = useState<boolean>(false);
    const scrollViewRef = useRef<ScrollView>(null);
  
    const AfterSelectItem = (item: React.SetStateAction<string>) => {
      setSelectedItem(item);
      setSelectClose(false);
    };
  
    const handleClick = () => {
      setSelectClose(!selectOpen);
      console.log("clicked");
    };
  
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
    <>
    <TouchableOpacity onPress={handleClick}>
      <View className={cn('bg-primary_foreground flex-row justify-between p-2 items-center border border-border rounded-md',className)} {...props}>
        <Text numberOfLines={1} className={cn('font-medium text-md',className=TitleClassName)}>{selectedItem}</Text>
        {selectOpen ? (
          <ChevronUp className={`${iconColor}`} color={"gray"} size={20} />
        ) : (
          <ChevronDown className={`${iconColor}`} color={"gray"} size={20} />
        )}
      </View>
    </TouchableOpacity>




<Modal
isVisible={selectOpen}
onBackButtonPress={() => setSelectClose(false)}
animationInTiming={400}
animationOut="slideOutDown"
onBackdropPress={() => setSelectClose(false)}
onSwipeComplete={() => setSelectClose(false)}
swipeDirection="down"
backdropColor='gray'
className="mb-0 w-full flex-1"
style={{ marginBottom: 0, marginLeft: 0 }}
>
<View className={cn('w-full h-96  absolute bottom-0 left-0 elevation-4 right-0 px-3 py-2 rounded-t-md border bg-white border-secondary shadow-2xl', className=ModalClassName)}>

    <View className="flex-row items-center justify-center pb-2">
    <Text className="w-16 h-0.5 rounded-full bg-secondary_foreground"></Text>
    </View>
    <View className={cn(`items-center pb-4`)}>
      <Text className={cn(`text-primary font-bold text-lg pl-3` , className = headingClassName)}>{heading}</Text>
    </View>
   
  <ScrollView
    // contentContainerStyle="pb-10"
    className="w-full h-full"
    showsVerticalScrollIndicator={false}
    ref={scrollViewRef}
  >
    {data.map((item, index) => (
      <Pressable
        key={index}
        className={cn(`mt-1  flex flex-row items-center justify-between px-3 rounded-md  ${selectedItem === item ? 'bg-primary_foreground' : ''}`)}
        onPress={() => AfterSelectItem(item)}
      >
        <Text className={cn(`py-3 text-base font-normal  ${selectedItem === item ? 'font-semibold' : ''}`, className=ListItemClassNames)}>{item}</Text>
        {selectedItem === item && (<SquareCheck size={20} color={'black'} />)}
      </Pressable>
    ))}
  </ScrollView>
</View>
</Modal>

</>




  );
};

export default Select;
