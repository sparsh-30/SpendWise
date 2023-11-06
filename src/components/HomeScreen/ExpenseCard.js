import { View, Image, Text } from 'react-native'
import wave from './../../../assets/wave.png'
import mastercard_icon from './../../../assets/mastercard.png'
import React from 'react'

export default function ExpenseCard() {
  return (
    <View>
      <View className="w-11/12 h-48 mx-auto">
        <Image className="w-full h-full rounded-2xl absolute top-0" source={wave} />
        <View className="w-full h-full py-3 px-4 flex flex-row justify-between">
          <View className="flex flex-col justify-between py-5 ml-3">
            <View className="">
              <Text className='text-white font-extrabold text-xl'>TOTAL BALANCE:</Text>
              <Text className='text-white font-extrabold text-xl'>$25,000</Text>
            </View>
            <Text className='text-white'>Aiden Pierce</Text>
          </View>
          <Image className="w-20 h-16" source={mastercard_icon} />
        </View>
      </View>
    </View>
  )
}