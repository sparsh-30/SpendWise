import {ScrollView, View, Text} from 'react-native';
import Transaction from './Transaction';
import {useSelector} from 'react-redux';
import colors from '../../colors';

export default function TransactionsContainer() {
  const theme = useSelector(state => state.theme.theme);
  const currentCategory = useSelector(state => state.dropdown.category);
  const transactionType = useSelector(state => state.dropdown.transactionType);
  const transactionsArray = useSelector(
    state => state.transactions.transactions,
  );

  const returnTransaction = (transaction, index) => {
    return (
      <Transaction
        key={index}
        expense={transaction.expense}
        title={transaction.title}
        category={transaction.category}
        time={transaction.date}
        value={transaction.amount}
      />
    );
  };

  return (
    <ScrollView>
      <View className="w-full pb-20 mx-auto">
        {transactionsArray.length === 0 && (
          <Text
            style={{
              backgroundColor:
                theme === 'light' ? colors.light.primary : colors.dark.primary,
            }}
            className="text-lg py-1 w-5/6 mx-auto mt-5 text-white text-center font-[800] rounded-full">
            No transactions to show
          </Text>
        )}
        {transactionType === 'both'
          ? currentCategory === 'all'
            ? transactionsArray.map((category, index) => {
                return returnTransaction(category, index);
              })
            : transactionsArray.map((category, index) => {
                if (currentCategory === category.category)
                  return returnTransaction(category, index);
              })
          : currentCategory === 'all'
          ? transactionsArray.map((category, index) => {
              if (
                (transactionType === 'expense' && category.expense === true) ||
                (transactionType === 'income' && category.expense === false)
              )
                return returnTransaction(category, index);
            })
          : transactionsArray.map((category, index) => {
              if (currentCategory === category.category)
                return returnTransaction(category, index);
            })}
      </View>
    </ScrollView>
  );
}
