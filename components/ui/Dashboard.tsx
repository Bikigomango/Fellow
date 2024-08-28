import { View , Text} from 'react-native';
import React from 'react';
import { cn } from '@/lib/utils'; // Make sure this utility function is correctly defined
import { Image } from 'expo-image';

interface DashProps extends React.ComponentProps<typeof View> {}

const Dashboard = ({ children, className, ...props }: DashProps) => {
  return (
    <View
      className={cn('flex flex-row justify-between w-full h-fit  items-center', className)}
      {...props}
    >
      {children}
    </View>
  );
};

// interface ContentProps extends React.ComponentProps<typeof View> {
//   imageSrc: string; // Ensure imageSrc is a URL string
// }

// const DashboardImage = ({ className, imageSrc, ...props }: ContentProps) => {
//   return (
//     <View
//       className={cn('flex-row size-12 bg-white', className)}
//       {...props}
//     >
//       <Image
//         source={require(imageSrc)}
//         contentFit="cover"
//         transition={1000}
//         style={{width:46 , height:48}}
//       />
//     </View>
//   );
// };



interface LabelProps extends React.ComponentProps<typeof Text> {}

const DashboardLabel = ({ className,children , ...props }: LabelProps) => {
  return (
    <Text
      className={cn('flex-row w-fit text-xl font-semibold', className)}
      {...props}
    >
      {children}
    </Text>
  );
};

export { Dashboard ,DashboardLabel };
