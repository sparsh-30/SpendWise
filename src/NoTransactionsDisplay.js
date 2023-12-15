import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import colors from './colors';

export default function NoTransactionsDisplay() {
  const theme = useSelector(state => state.theme.theme);
  return (
    <View
      style={{
        backgroundColor:
          theme === 'light' ? colors.light.graph : colors.dark.graph,
      }}
      className="w-5/6 h-[400] mx-auto rounded-3xl flex justify-center items-center">
      <Text
        style={{
          color: theme === 'light' ? colors.light.primary : colors.dark.primary,
        }}
        className="text-xl w-5/6 mx-auto text-center font-[900]">
        No Transaction Found
      </Text>
    </View>
  );
}
