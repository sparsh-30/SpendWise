import {View, Image, Text, Dimensions} from 'react-native';
import wave from './../../../assets/wave.png';
import mastercard_icon from './../../../assets/mastercard.png';
import React from 'react';
import {useSelector} from 'react-redux';

export default function ExpenseCard() {
  const totalExpense = useSelector(state => state.transactions.totalExpense);
  const totalIncome = useSelector(state => state.transactions.totalIncome);

  const setCardWidth = () => {
    const windowWidth = Dimensions.get('window').width;
    console.log(windowWidth);
    if (windowWidth > 450) return 350;
    return '92%';
  };

  return (
    <View>
      <View style={{width: setCardWidth()}} className="h-48 mx-auto">
        <Image
          className="w-full h-full rounded-2xl absolute top-0"
          source={wave}
        />
        <View className="w-full h-full py-3 px-4 flex flex-row justify-between">
          <View className="flex flex-col justify-between py-5 ml-3">
            <View className="">
              <Text className="text-white font-extrabold text-xl">
                TOTAL BALANCE:
              </Text>
              <Text className="text-white font-extrabold text-xl">
                ₹ {(totalIncome - totalExpense).toLocaleString('en-IN')}
              </Text>
            </View>
            <Text className="text-white font-semibold">Aiden Pierce</Text>
          </View>
          <Image className="w-20 h-16" source={mastercard_icon} />
        </View>
      </View>
    </View>
  );
}
