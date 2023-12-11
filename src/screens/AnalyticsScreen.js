import { ScrollView, View } from 'react-native'
import Header from '../components/AnalyticsScreen/Header'
import PastTransactions from '../components/AnalyticsScreen/PastTransactions'
import CategoryAnalysis from '../components/AnalyticsScreen/CategoryAnalysis'
import Demo from '../components/AnalyticsScreen/Demo'
import { useSelector } from 'react-redux'
import colors from '../colors'

export default function AnalyticsScreen() {
  const theme=useSelector(state => state.theme.theme)
  return (
    <ScrollView
      style={{backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background}} className="bg-white dark:bg-[#302D43] flex flex-1">
      <Header />
      {/* <PastTransactions /> */}
      <Demo />
      <CategoryAnalysis />
      <View className="w-full h-20"></View>
    </ScrollView>
  )
}