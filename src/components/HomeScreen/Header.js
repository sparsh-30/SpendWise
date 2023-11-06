import {View, Text, Image, Switch} from 'react-native';
import {useState} from 'react';
import avatar_image from './../../../assets/avatar.png';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
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
    <View className="flex flex-row justify-between">
      <View className="py-5 px-2 flex flex-row items-center">
        <Image
          className="w-[70px] h-[70px] rounded-full"
          source={avatar_image}
        />
        <View className="ml-2">
          <Text
            style={{
              color: theme === 'light' ? colors.light.text : colors.dark.text,
            }}
            className="text-black">
            Hello,
          </Text>
          <Text
            style={{
              color:
                theme === 'light' ? colors.light.primary : colors.dark.primary,
            }}
            className="text-2xl font-bold text-black dark:bg-red-500">
            Aiden Pierce
          </Text>
        </View>
      </View>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
