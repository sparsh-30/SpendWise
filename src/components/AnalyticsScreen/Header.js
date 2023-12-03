import { View, Text, TouchableNativeFeedback } from 'react-native'
import { useSelector } from 'react-redux'
import colors from '../../colors'

/*****************************************/
import { toggleMode } from '../../store/themeSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
/**************************************/

export default function Header() {
    const theme=useSelector(state => state.theme.theme)

    /********************************/
    const dispatch = useDispatch();

  const toggleSwitch = () => {
    if (theme === 'light') dispatch(toggleMode('dark'));
    else dispatch(toggleMode('light'));
  };
  /***************************************/
  return (
    <View className="flex flex-row justify-between items-center">
    {/* <View> */}
      <Text
        style={{
          color: theme === 'light' ? colors.light.primary : colors.dark.primary,
        }}
        className="text-2xl text-center my-4 font-[700]">
        ANALYTICS
      </Text>





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
  )
}