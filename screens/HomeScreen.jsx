import { View, Text, StatusBar, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import { featured } from '../constants';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white mt-5'>
       <StatusBar barStyle='dark-content' />
       <View className='flex-row items-center space-x-2 px-4 pb-2'>
        <View className='flex-row flex-1 items-center px-2 rounded-full border border-gray-300'>
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder='Restaurant' className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3  rounded-full" >
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
        </View>
       </View>

{/* main section */}
   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
    paddingBottom: 20
   }}>

{/* categories */}
<Categories />

{/* featured */}
 <View>
  {
    featured.map((item, index) => {
      return (
        <FeaturedRow key={index} title={item.title} restaurant={item.restaurant} description={item.description} />
      )
    })
  }
 </View>

   </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen