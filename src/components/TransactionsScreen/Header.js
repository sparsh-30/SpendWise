import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../../colors';

export default function Header() {
  const theme = useSelector(state => state.theme.theme);

  return (
    <View>
      <Text
        style={{
          color: theme === 'light' ? colors.light.primary : colors.dark.primary,
        }}
        className="text-2xl text-center mt-4 font-[700]">
        TRANSACTIONS
      </Text>
    </View>
  );
}
