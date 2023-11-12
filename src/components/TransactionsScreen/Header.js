import { View, Text } from 'react-native'
import colors from '../../colors'

export default function Header() {
  return (
    <View>
      <Text style={{color:colors.light.primary}} className="text-center text-2xl my-2 font-[700]">TRANSACTIONS</Text>
    </View>
  )
}