import {View, Text, TouchableNativeFeedback} from 'react-native';
import MyText from '../../MyText';
import colors from '../../colors';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo'
import Transaction from './../Transaction'

export default function RecentTransactions() {
  const theme = useSelector(state => state.theme.theme);
  return (
    <View className="w-11/12 mx-auto">
      <View className="flex flex-row justify-between mb-2">
        <MyText>Recent Transactions</MyText>
        {/* <TouchableNativeFeedback>
          <Text
            style={{
              color:
                theme === 'light' ? colors.light.primary : colors.dark.primary,
              fontWeight: 600,
            }}>
            See All
          </Text>
        </TouchableNativeFeedback> */}
      </View>
      <View>
        {/* <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Dividend"
          time="11/9/23 12:21 PM"
          value={2500}
        /> */}
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Education"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={true}
          title="Recieved from Ujjwal"
          category="Entertainment"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Groceries"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Healthcare"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="House Rent"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Insurance"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Loan"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Maintenance"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Others"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Savings"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Transportation"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Dividend"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Interest"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Investment"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Lend"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Pension"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Profit"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Real Estate"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Salary"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <Transaction
          expense={false}
          title="Recieved from Ujjwal"
          category="Trade"
          time="11/9/23 12:21 PM"
          value={2500}
        />
      </View>
      <TouchableNativeFeedback>
        <View className="w-2/5 py-2 mt-2 mb-3 rounded-md mx-auto flex flex-row justify-center items-center" style={{backgroundColor:theme==='light'?colors.light.primary:colors.dark.primary}}>
          <Text className="text-lg font-bold text-white mr-1">View All</Text>
          <Icon name='chevron-right' size={20} color={'#fff'} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}