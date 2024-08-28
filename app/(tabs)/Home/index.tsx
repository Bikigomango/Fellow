import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Select from '@/components/ui/select';
import Charts from '@/components/ui/Charts';

type Color = 'purple' | 'yellow' | 'orange' | 'blue' | 'red' | 'cyan';

const Subjects = [
  { sub: 'Mathematics', start: '1', end: '2', color: 'purple' },
  { sub: 'Science', start: '2', end: '3', color: 'yellow' },
  { sub: 'Geography', start: '3', end: '4', color: 'orange' },
  { sub: 'English', start: '4', end: '5', color: 'blue' },
  { sub: 'Project Management hello', start: '5', end: '6', color: 'red' },
  { sub: 'Drawing', start: '6', end: '7', color: 'cyan' },
];

const colorClasses:Record<Color , string> = {
  purple: 'bg-purple-200',
  yellow: 'bg-yellow-200',
  orange: 'bg-orange-200',
  blue: 'bg-blue-200',
  red: 'bg-red-200',
  cyan: 'bg-cyan-200',
};

const Home = () => {
  return (
    <View className='px-4 py-4'>
      <View className='pb-6'>
        <Text className='text-lg font-semibold'>Today's Sessions</Text>
        <Text className='text-sm text-secondary_foreground font-normal'>Next Session - Applied Science</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className='gap-3 flex-row pb-6'>
        {Subjects.map((item, index) => (
          <Card key={index} className='gap-12 w-56'>
            <CardHeader className='gap-4'>
              <View className={`w-5 h-5 rounded-full ${colorClasses[item.color as Color] || 'bg-black'}`} />
              <CardTitle numberOfLines={1} className='text-lg font-semibold'>{item.sub}</CardTitle>
            </CardHeader>
            <CardFooter>
              <Text className='text-primary text-md font-'>Hour {item.start}</Text>
              <Text className='text-primary text-md'>Hour {item.end}</Text>
            </CardFooter>
          </Card>
        ))}
        </View>
      </ScrollView>

      <View className='pb-6'>
        <Text className='text-lg font-medium'>Attendance Overview</Text>
      </View>
      <View>
        <Select className='w-40 bg-white'  heading={'Select the year for the graph'} headingClassName={'text-lg font-base'} iconColor={''} TitleClassName={'text-secondary_foreground font-normal'} ListItemClassNames={''} ModalClassName={''} data={['July, 2024', 'Aug, 2024', 'Sep, 2024', 'Oct ,2024', 'Nov, 2024', 'Dec, 2024', 'June, 2024', 'Aug, 2025', 'Sep, 2025', 'Oct ,2025', 'Nov, 2025', 'Dec, 2025']} />
      </View>
      <View>
        <Charts/>
      </View>
    </View>
  );
};

export default Home;
