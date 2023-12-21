import {View, Text, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {toggleMode} from '../../store/themeSlice';
import colors from '../../colors';

export default function DarkMode() {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    if (theme === 'light') dispatch(toggleMode('dark'));
    else dispatch(toggleMode('light'));
  };

  return (
    <TouchableNativeFeedback onPress={toggleSwitch}>
      <View
        style={{
          backgroundColor:
            theme === 'light' ? colors.light.primary : colors.dark.primary,
          shadowColor:
            theme === 'light' ? colors.light.shadow : colors.dark.shadow,
        }}
        className="w-5/6 mx-auto p-3 flex flex-row justify-between items-center shadow-lg rounded-lg">
        <Text style={{fontSize: 16}} className="font-extrabold text-white">
          {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
        </Text>
        <View>
          {theme === 'light' ? (
            <Icon name="moon" size={24} color="#FDB813" />
          ) : (
            <Icon name="sunny" size={24} color="#FDB813" />
          )}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
