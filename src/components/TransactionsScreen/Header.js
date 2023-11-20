import { View, Text, Switch } from 'react-native'
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {switchToDark, switchToLight} from '../../store/themeSlice';
import colors from '../../colors';

export default function Header() {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    if (isEnabled === false) {
      dispatch(switchToDark());
      setIsEnabled(true);
    } else {
      dispatch(switchToLight());
      setIsEnabled(false);
    }
  };

  return (
    <View className="flex flex-row justify-between pt-2">
      <Text style={{color:theme==='light'?colors.light.primary:colors.dark.primary}} className="text-2xl my-2 font-[700]">TRANSACTIONS</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}