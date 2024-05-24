import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';


export default function RestaurantCard({item}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Restaurant", {...item})} >
        <View style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}} className="mr-6 bg-white rounded-3xl shadow-lg">
            <Image source={{uri: item.image}}
       className="h-36 w-64 rounded-t-3xl" />
        <View className="px-3 pb-4 space-y-2">
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
        </View>
    </TouchableOpacity>
  )
}