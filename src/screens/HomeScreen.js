import {View, ScrollView} from 'react-native';
import Header from '../components/HomeScreen/Header';
import ExpenseCard from '../components/HomeScreen/ExpenseCard';
import Income_Expense from '../components/HomeScreen/Income_Expense';
import RecentTransactions from '../components/HomeScreen/RecentTransactions';
import {useSelector} from 'react-redux';
import colors from '../colors';

export default function HomeScreen() {
  const theme = useSelector(state => state.theme.theme);
  return (
    <ScrollView
      style={{
        backgroundColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
      }}
      className="bg-white dark:bg-[#302D43] flex flex-1">
      <Header />
      <ExpenseCard />
      <Income_Expense />
      <RecentTransactions />
      <View className="h-20"></View>
    </ScrollView>
  );
}
