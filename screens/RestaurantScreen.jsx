import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";

export default function RestaurantScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  
  return (
    <View>
     <ScrollView>
      <View className="relative" >
        <Image className="w-full h-72" source={{uri: item.image}} />
      <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow" >
        <Icon.ArrowLeft height="25" width="25" stroke={"gray"} />
      </TouchableOpacity>
      </View>
      <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="bg-white -mt-12 pt-6" >
      <Text className="text-lg font-bold pt-2">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
                <Icon.Star height="15" width="15" stroke={"gray"} />
                <Text className="text-green-700">{item.stars}</Text>
                <Text className="text-gray-700">({item.reviews} reviews). <Text className="font-semibold text-lg">{item.category}</Text></Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <Icon.MapPin height="15" width="15" stroke="red" />
                <Text className="text-sm">Nearby. {item.address}</Text>
            </View>
      </View>
     </ScrollView>
    </View>
  )
}