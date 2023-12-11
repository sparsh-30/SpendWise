import { ScrollView } from 'react-native'
import Header from '../components/AnalyticsScreen/Header'
// import PastTransactions from '../components/AnalyticsScreen/PastTransactions'
import CategoryAnalysis from '../components/AnalyticsScreen/CategoryAnalysis'
import Demo from '../components/AnalyticsScreen/Demo'
import { useSelector } from 'react-redux'
import colors from '../colors'
import { PieChart } from "react-native-gifted-charts";

export default function AnalyticsScreen() {
  const theme=useSelector(state => state.theme.theme)
//   const pieData = [
//     {value: 54, color: '#177AD5', text: 'House Rent'},
//     {value: 40, color: '#79D2DE', text: 'Transportation'},
//     {value: 20, color: '#ED6665', text: 'Real Estate'},
// ];
  return (
    <ScrollView
      style={{backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background}} className="bg-white dark:bg-[#302D43] flex flex-1">
      <Header />
      {/* <PastTransactions /> */}
      <Demo />
      <CategoryAnalysis />
      {/* <PieChart
                donut
                innerRadius={80}
                data={pieData}
                focusOnPress
                onPress={(item)=> console.log(item)}
                centerLabelComponent={() => {
                return <Text style={{fontSize: 30}}>70%</Text>;
                }}
            /> */}
    </ScrollView>
  )
}