import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import MyText from '../../MyText';
import PlaceholderImage from './../../../assets/placeholder.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {toggleMode} from '../../store/themeSlice';
import colors from '../../colors';

export default function Header() {
  const theme = useSelector(state => state.theme.theme);
  const userImage = useSelector(state => state.user.userImage);
  const userName = useSelector(state => state.user.userName);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    if (theme === 'light') dispatch(toggleMode('dark'));
    else dispatch(toggleMode('light'));
  };

  return (
    <View className="flex flex-row justify-between">
      <View className="pb-5 pt-3 px-2 flex flex-row items-center">
        <Image
          className="w-[70px] h-[70px] rounded-full"
          source={
            userImage === null || userImage === ''
              ? PlaceholderImage
              : {uri: userImage}
          }
        />
        <View className="ml-2">
          <MyText>Hello,</MyText>
          <Text
            style={{
              color:
                theme === 'light' ? colors.light.primary : colors.dark.primary,
            }}
            className="text-2xl font-bold">
            {userName}
          </Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-center mr-6">
        <TouchableNativeFeedback onPress={() => toggleSwitch()}>
          {theme === 'light' ? (
            <Icon name="sunny" size={32} color="#FDB813" />
          ) : (
            <Icon name="moon" size={28} color="#FDB813" />
          )}
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
