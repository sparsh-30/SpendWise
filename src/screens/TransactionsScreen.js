import { ScrollView } from 'react-native'
import Header from '../components/TransactionsScreen/Header'

export default function TransactionsScreen() {
  return (
    <ScrollView className="flex-1">
      <Header />
    </ScrollView>
  )
}