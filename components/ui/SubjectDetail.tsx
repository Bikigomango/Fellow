import { Input } from '@/components/ui/input'
import { Nav, NavMenu } from '@/components/ui/topNavigation'
import React from 'react'
import { View , Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


function SubjectDetail() {
  return (
    <SafeAreaView className=''>
        <View className='mt-6 flex flex-row gap-7 pb-8'>
        <Text className='w-11 h-11 bg-red-200 rounded-full'>   </Text>
        <View>
        <Text className='font-semibold text-md'>Mathamatics</Text>
        <Text className='text-xs text-slate-600 font-sans'>Exploring the Beauty of Patterns and Numbers</Text>
        </View>
        </View >
        <View className='border border-slate-100 '></View>

        <Input placeholder='Search by chapter or by names' placeholderClassName='text-slate-400 text-xs'  className='h-12 bg-slate-100'></Input>
    
        <Nav className='mt-6'>
            <NavMenu indicatorColor='purple'>
                Overview
            </NavMenu>
            <NavMenu indicatorColor='purple'>
                Attendance
            </NavMenu>
            <NavMenu indicatorColor='purple'>
                Notes
            </NavMenu>
            <NavMenu indicatorColor='purple'>
                Assignment
            </NavMenu>
        </Nav>
        <Text className='font-semibold text-md mt-6'>Notes</Text>
    </SafeAreaView>

  )
}

export default SubjectDetail
