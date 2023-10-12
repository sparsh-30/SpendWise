import {View, Text, Image} from 'react-native';
import avatar_image from './../../../assets/avatar.png';
import {useSelector} from 'react-redux';
import colors from '../../colors';

export default function Header() {
  const theme = useSelector(state => state.theme.theme);
  return (
    <View className="w-full py-5 px-2 flex flex-row items-center">
      <Image className="w-[70px] h-[70px] rounded-full" source={avatar_image} />
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
  );
}
