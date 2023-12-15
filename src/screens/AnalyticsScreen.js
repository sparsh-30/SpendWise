import {ScrollView, View} from 'react-native';
import Header from '../components/AnalyticsScreen/Header';
import PastTransactions from '../components/AnalyticsScreen/PastTransactions';
import Demo from '../components/AnalyticsScreen/Demo';
import CategoryAnalysis from '../components/AnalyticsScreen/CategoryAnalysis';
import NoTransactionsDisplay from '../NoTransactionsDisplay';
import {useSelector} from 'react-redux';
import colors from '../colors';

export default function AnalyticsScreen() {
  const theme = useSelector(state => state.theme.theme);
  const transactions = useSelector(state => state.transactions.transactions);
  return (
    <ScrollView
      style={{
        backgroundColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
      }}
      className="bg-white dark:bg-[#302D43] flex flex-1">
      <Header />
      {/* <PastTransactions /> */}
      {transactions.length === 0 ? (
        <NoTransactionsDisplay />
      ) : (
        <View>
          <Demo />
          <CategoryAnalysis />
          <View className="w-full h-20"></View>
        </View>
      )}
    </ScrollView>
  );
}
