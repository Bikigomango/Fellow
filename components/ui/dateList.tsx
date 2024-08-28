import { View, Text , ScrollView} from "react-native";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface DateProps extends React.ComponentProps<typeof ScrollView & Text> {}

const DateCard = ({ children, className, ...props }: DateProps) => {
  return (

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className={cn("flex-row gap-3 items-center", className)} >
      {children}
      </View>
    </ScrollView>


  );
};


interface Object {
    date:string;
    day:string;
}


interface ItemProps extends React.ComponentProps<typeof View> {
    data:Object[];
    TextFirstClassName?:string
    TextSecondClassName?:string
}

const DateItem = ({ className, data,TextFirstClassName ,TextSecondClassName, ...props }: ItemProps) => {
    const [activeDate, setActiveDate] = useState({
        date:'03',
        day:'Wed'
    });

    return (
        <>
            {data.map((item, index) => {
                const isActive = item.date === activeDate.date && item.day === activeDate.day;

                return (
                    <View
                        key={index}
                        className={cn(
                            `w-[46] h-[48] rounded-md items-center justify-center font-normal`,
                            isActive ? 'bg-black' : 'bg-secondary',
                            className
                        )}
                        {...props}
                    >
                        <Text
                            className={cn(
                                isActive ? 'text-white' : null
                            ,className=TextFirstClassName)}
                            {...props}
                        >
                            {item.date}
                        </Text>
                        <Text
                            className={cn(
                                isActive ? 'text-white' : null , className=TextSecondClassName
                            )}
                            {...props}
                        >
                            {item.day}
                        </Text>
                    </View>
                );
            })}
        </>
    );
};

export { DateCard, DateItem };
