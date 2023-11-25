import {View, Text, TouchableNativeFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyText from '../../MyText';
import colors from '../../colors';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import Transaction from './../Transaction';
import DummyTransactionsArray from '../../DummyTrasactionsData';

export default function RecentTransactions() {
  const theme = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const transactionsArray = DummyTransactionsArray;

  return (
    <View className="w-11/12 mx-auto">
      <View className="flex flex-row justify-between mb-2">
        <MyText>Recent Transactions</MyText>
      </View>
      <View>
        {transactionsArray.length === 0 ? (
          <Text
            style={{
              backgroundColor:
                theme === 'light' ? colors.light.primary : colors.dark.primary,
            }}
            className="text-lg py-2 w-5/6 mx-auto mt-5 text-white text-center font-[800] rounded-xl">
            No transactions to show
          </Text>
        ) : (
          transactionsArray.map((category, index) => {
            if (index < 7)
              return (
                <Transaction
                  key={index}
                  expense={category.expense}
                  title={category.title}
                  category={category.category}
                  time={category.date}
                  value={category.amount}
                />
              );
          })
        )}
      </View>
      <TouchableNativeFeedback onPress={()=> navigation.navigate("TransactionsScreen")}>
        <View
          className="w-2/5 py-2 mt-2 mb-3 rounded-md mx-auto flex flex-row justify-center items-center"
          style={{
            backgroundColor:
              theme === 'light' ? colors.light.primary : colors.dark.primary,
            display: transactionsArray.length === 0 ? 'none' : 'flex',
          }}>
          <Text className="text-lg font-bold text-white mr-1">View All</Text>
          <Icon name="chevron-right" size={20} color={'#fff'} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
