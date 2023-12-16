import {View, Text, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import colors from '../../colors';

export default function DeleteTransactions() {
  const theme = useSelector(state => state.theme.theme);
  return (
    <TouchableNativeFeedback>
      <View
        style={{
          backgroundColor: theme === 'light' ? '#ef5350' : '#d32f2f',
          shadowColor:
            theme === 'light' ? colors.light.shadow : colors.dark.shadow,
        }}
        className="w-5/6 mx-auto my-4 p-3 rounded-lg bg-[#d32f2f] shadow-lg">
        <Text className="text-lg font-extrabold text-white text-center">
          DELETE ALL TRANSACTIONS
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}
