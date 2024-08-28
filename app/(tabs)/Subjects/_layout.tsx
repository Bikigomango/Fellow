import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack initialRouteName="index" screenOptions={{headerShown:true , headerStyle:{backgroundColor:'white' , },  headerShadowVisible: false,}}>
      <Stack.Screen  name='index' options={{headerShown:false}}/>
      <Stack.Screen name='SubjectDetails' options={{headerShown:true}}/>
    </Stack>
  )
}

export default _layout