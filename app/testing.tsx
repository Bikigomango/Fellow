import { View, Text, ScrollView } from "react-native";
import React from "react";
import SubjectDetail from "@/components/ui/SubjectDetail";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Card,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/CardPercent";
import { Progress } from "@/components/ui/progress";
import { Image } from "expo-image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, CircleUserRound, BellIcon } from "lucide-react-native";
import { Dashboard  ,DashboardLabel } from "@/components/ui/Dashboard";
import { DateItem , DateCard } from "@/components/ui/dateList";

import Select from '../components/ui/select'

const GITHUB_AVATAR_URI = "https://github.com/mrzachnugent.png";

const Testing = () => {

  const sampleData = [
    { date: '01', day: 'Mon' },
    { date: '02', day: 'Tue' },
    { date: '03', day: 'Wed' },
    { date: '04', day: 'Thur' },
    { date: '05', day: 'Fri' },
    { date: '06', day: 'Sat' },
    { date: '07', day: 'Sun' },
    { date: '08', day: 'Mon' },
    { date: '09', day: 'Tue' },
    { date: '10', day: 'Wed' },
    { date: '11', day: 'Thur' },
];

  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  return (
    <SafeAreaView className="flex-1">
        <ScrollView>
    <View className="bg-white p-3 pt-20 pb-20 gap-6">
    <Card className="flex-row gap-3 p-1.5 border-0 items-start">
      <Avatar
        alt="Zach Nugent's Avatar "
        asChild={false}
        className="bg-gray-200 size-6"
      >
        <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
        <AvatarFallback>
          <Text className="text-red-400">ZN</Text>
        </AvatarFallback>
      </Avatar>

      <View className="gap-2 pt-1">
        <CardHeader className="p-0">
          <CardTitle>Notes as been Uploaded by Narayan R </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col justify-start items-start gap-2 p-0">
          <CardTitle className="text-md text-primary font-medium">Chapter 2 Geometry</CardTitle>
          <CardTitle className="text-md text-primary font-medium">3:35 pm July 30</CardTitle>
        </CardFooter>
        <CardContent className=" flex-row  gap-2 h-8 px-2 py-1.5 w-40 rounded-md border border-border items-center ">
          <Image
            source={require("../assets/images/pdf_icon.webp")}
            style={{
              width: 11,
              height: 11,
              maxHeight: "100%",
              maxWidth: "100%",
            }}
          />
          <CardTitle className="text-sm text-secondary_foreground overflow-hidden truncate text-ellipsis">Chapter 2 Geometry</CardTitle>
        </CardContent>
      </View>
    </Card>










         <Card className="gap-0">
       <CardHeader className="border-b border-border flex-row gap-4 justify-between  items-center">
         <View className="flex-row items-center justify-start gap-4">
           <Image
            source={require("../assets/images/pdf_icon.webp")}
            style={{ width: 24, height: 24 }}
          />
          <CardTitle className="font-medium text-md">
            Scholarship Opportunities
          </CardTitle>
        </View>
        <View className="border border-border rounded-lg p-1">
          <Download size={15} color={"gray"} />
        </View>
      </CardHeader>
      <CardContent className="h-28 justify-center items-center px-4">
        {/* <Image source={require("../../assets/images/pdf_icon.webp")} style={{width:'100%' , height:'100%' ,}} /> */}

        <Text className="text-md text-secondary_foreground">
          Scholarships are financial awards provided to students to support
          their education. They are typically awarded based on various
          criteria such as academic merit, financial need, leadership skills,
          community service.
        </Text>
      </CardContent>
      <CardFooter className=" flex-row justify-start items-center  py-1 gap-2 border-t border-border">
        <Avatar
          alt="Zach Nugent's Avatar "
          asChild={false}
          className="bg-gray-200 size-6"
        >
          <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
          <AvatarFallback>
            <Text className="text-red-400">ZN</Text>
          </AvatarFallback>
        </Avatar>
        <View className="flex-row gap-2">
          <CardTitle className="text-sm text-secondary_foreground">
            Uploaded by Narayan R
          </CardTitle>
          <CardTitle className="text-sm text-secondary_foreground">
            Jan 24, 2024
          </CardTitle>
        </View>
      </CardFooter>
    </Card>



     <Card className='p-4 gap-5'>
           <CardHeader className="py-0">
               <CardTitle className="text-xl">Overall Sessions</CardTitle>
           </CardHeader>
           <CardHeader className='flex-row py-0 gap-2 items-center'>
           <CardTitle className="text-2xl p-0">15/30</CardTitle>
           <CardTitle className='font-medium p-0'>(50%)</CardTitle>
           </CardHeader>
           <CardFooter className='flex flex-col justify-start items-start gap-2 '>
               <CardDescription className="text-secondary_foreground">Completed Sessions by Overall sessions</CardDescription>
            <Progress value={87}  asChild={false} indicatorClassName=''/>
           </CardFooter>
       </Card> 






          <Card className='w-full bg-primary_foreground gap-6 px-5 py-3'>
       <CardHeader className="gap-3 flex-row items-center p-0">
         <Text className='w-3.5 h-3.5 rounded-full bg-green-300'></Text>
         <CardTitle className='text-md'>Mathamatics</CardTitle>
         <CardTitle className='text-md text-secondary_foreground'>15CS10T</CardTitle>
       </CardHeader>
       <CardFooter className='justify-start p-0 gap-3'>
         <CircleUserRound color={'black'} size={14}/>
         <CardTitle className='text-md text-secondary_foreground'>Narayan R</CardTitle>
       </CardFooter>
     </Card>



{/* 
    <Card className=''>
      <CardHeader className=''>
        <Text className='w-4 h-4 rounded-full bg-red-400'></Text>
        <CardTitle>Mathamatics</CardTitle>
      </CardHeader>
      <CardFooter>
        <Text>Hour 1</Text>
        <Text>Hour 2</Text>
      </CardFooter>
    </Card> */}



          
      {/* ////   SUBJECT  ATTENDANCE PERCENTAGE   */}

      <Card className="w-52 px-3 py-3 gap-2">
        <CardHeader className="p-0">
          <CardTitle className="p-0 text-xl">69%</CardTitle>
        </CardHeader>
        <CardFooter className="p-0">
          <CardTitle className="p-0 text-md text-secondary_foreground">Total Sessions - 100</CardTitle>
        </CardFooter>
        <CardFooter className="p-0">
          <CardTitle className="p-0 text-md text-secondary_foreground">Sessions Present - 69</CardTitle>
        </CardFooter>
      </Card>




      {/* /////    Top bar  DASH BOARD   COMPONENT  */}

      <Dashboard >
        <Image
        source={require('../assets/images/rocket.png')}
        style={{width:46 , height:46}}
        />
        <View className="flex-row items-center gap-2">
        <DashboardLabel className="text-xl">
          KSIT
        </DashboardLabel>
        <Text className="text-6xl rounded-full bg-black w-1 h-1"></Text>
        </View>
       <BellIcon size={26} color={'black'}/>
      </Dashboard>






      {/* //////    Notes tab  notes PDF  */}

      <Card className="gap-0">
       <CardHeader className="border-b border-border flex-row gap-4 justify-between  items-center">
         <View className="flex-row items-center justify-start gap-4">
           <Image
            source={require("../assets/images/pdf2.png")}
            style={{ width: 24, height: 24, resizeMode:'contain' }}
          />
          <CardTitle className="font-medium text-md">
            Chapter 1 Foundations of Mathematics
          </CardTitle>
        </View>
        {/* <View className="border border-border rounded-lg p-1">
          <Download size={15} color={"gray"} />
        </View> */}
      </CardHeader>
      <CardContent className="h-28 justify-center items-center ">
        <Image source={require("../assets/images/pdf2.png")} style={{width:'100%' , height:'100%' , resizeMode:'cover'}} />
      </CardContent>
      <CardFooter className=" flex-row justify-start items-center  py-1 gap-2 border-t border-border">
        <Avatar
          alt="Zach Nugent's Avatar "
          asChild={false}
          className="bg-gray-200 size-6"
        >
          <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
          <AvatarFallback>
            <Text className="text-red-400">ZN</Text>
          </AvatarFallback>
        </Avatar>
        <View className="flex-row gap-2">
          <CardTitle className="text-sm text-secondary_foreground">
            Uploaded by Manjunath R
          </CardTitle>
          <CardTitle className="text-sm text-secondary_foreground">
            July 22, 2024
          </CardTitle>
        </View>
      </CardFooter>
    </Card>






       {/* THIS IS THE CARD OF SUBJECT HOUR 1 AND HOUR 2  */}
      


          <Card className="w-56 h-28 justify-between p-1">
            <CardHeader className='flex-row gap-3 items-center '>
              <Text className="w-4 h-4 bg-green-500 rounded-full"></Text>
              <CardTitle numberOfLines={1}  className="font-medium text-lg w-40">Geography Science Labortory</CardTitle>
            </CardHeader>
            <CardFooter className="justify-between">
              <CardTitle className="text-secondary_foreground  text-md">Hour 1</CardTitle>
              <CardTitle className="text-secondary_foreground text-md">Hour 2</CardTitle>
            </CardFooter>
          </Card>







          {/* THIS IS THE CUSTOM  SELECT OR CUSTOM  DROP DOWN COMPONENT COMPONENT TO SELECT THE OPTIONS */}


            <Select className="bg-white w-32" iconColor={""} data={['mango', 'banana', 'pineapple', 'orange', 'jungle', 'tamaoto', 'langur', 'vegetable', 'yak', 'gangur', 'hleew']} ListItemClassNames={""} ModalClassName={""} TitleClassName={"text-secondary_foreground"} heading={""} headingClassName={""}/>

           





           {/* THIS IS THE DATE SHOWING COMPONENT  IN SESSIONS TAB */}


           <DateCard >
            <DateItem  data={sampleData}/>
           </DateCard>







    


  </View>
  </ScrollView>
  </SafeAreaView>

  )
}

export default Testing