import React, { useState } from 'react';
import { View, Text as RNText, TouchableOpacity, Pressable, ViewStyle, TextStyle } from 'react-native';
import { cn } from '@/lib/utils'; 



interface NavProps extends React.ComponentProps<typeof View> {
    
}

const Nav = ({ children, className, ...props }: NavProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View
      className={cn('w-full h-10 flex-row justify-between  items-center  ', className)}
      {...props}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<any>, {
          onPress: () => handleTabPress(index),
          isActive: index === activeTab,
        })
      )}
    </View>
  );
};




interface MenuProps extends React.ComponentProps<typeof Pressable> {
    onPress?: () => void;
    isActive?: boolean;
    indicatorColor?: string; // Color for border and text
    children?: React.ReactNode;
  }
  
  const NavMenu = ({ className, children, onPress, isActive, indicatorColor, ...props }: MenuProps) => {
    const dynamicBorderColor: ViewStyle = isActive ? { borderBottomColor: indicatorColor } : {};  
    return (
      <Pressable
        onPress={onPress}
        {...props}
        className={cn(
          'flex-1 flex-row items-center justify-center',
          isActive ? 'border-b-2' : 'border-b-1',
          className
        )}
        style={dynamicBorderColor} // Apply dynamic border color
      >
        <RNText
        className={cn(`text-sm font-semibold`, className)}
        >
          {children}
        </RNText>
      </Pressable>
    );
  };


    
interface ScreenProps extends React.ComponentProps<typeof View> {
  onPress?: () => void;
  isActive?: boolean;
  children?: React.ReactNode;
}

const NavScreen = ({ className, children, onPress, isActive,  ...props }: ScreenProps) => {
  return (
    <View
      className={cn(`flex-1 bg-red-500`)}
    >
      <>{children}</>
    </View>
  );
};



  
export { Nav, NavMenu , NavScreen};
