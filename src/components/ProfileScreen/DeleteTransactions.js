import {View, Text, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeModalStatus} from '../../store/modalSlice';
import colors from '../../colors';

export default function DeleteTransactions() {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  const handleButtonPress = () => {
    dispatch(changeModalStatus('open'));
  };

  return (
    <TouchableNativeFeedback onPress={handleButtonPress}>
      <View
        style={{
          backgroundColor: theme === 'light' ? '#ef5350' : '#d32f2f',
          shadowColor:
            theme === 'light' ? colors.light.shadow : colors.dark.shadow,
        }}
        className="w-5/6 mx-auto my-4 p-3 rounded-lg shadow-lg">
        <Text
          style={{fontSize: 16}}
          className="font-extrabold text-white text-center">
          DELETE ALL TRANSACTIONS
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}
