import {View} from 'react-native';
import colors from '../colors';
import {useSelector} from 'react-redux';
import Header from '../components/TransactionsScreen/Header';
import Dropdowns from '../components/TransactionsScreen/Dropdowns';
import TransactionsContainer from '../components/TransactionsScreen/TransactionsContainer';

export default function TransactionsScreen() {
  const theme = useSelector(state => state.theme.theme);
  return (
    <View
      style={{backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background}} className="bg-white dark:bg-[#302D43] flex flex-1">
      <Header />
      <Dropdowns />
      <TransactionsContainer />
      {/* <View className="h-20"></View> */}
    </View>
  );
}
