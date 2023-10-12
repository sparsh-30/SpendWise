import {View, Text, Button} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { switchToDark, switchToLight } from '../store/themeSlice';

export default function SettingsScreen() {

  const currentTheme=useSelector((state)=> state.theme.theme);
  const dispatch=useDispatch();

  const toggleCurrentTheme=()=>{
    if(currentTheme==='light') dispatch(switchToDark());
    else dispatch(switchToLight());
  }

  return (
    <View>
      <Button
        onPress={toggleCurrentTheme}
        title={'Change Theme'}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text className="text-center text-4xl">{currentTheme==='light'?"Light Mode":"Dark Mode"}</Text>
    </View>
  );
}
