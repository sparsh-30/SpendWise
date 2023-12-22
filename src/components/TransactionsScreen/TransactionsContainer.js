import {ScrollView, View} from 'react-native';
import Transaction from './Transaction';
import NoTransactionsDisplay from '../../NoTransactionsDisplay';
import {useSelector} from 'react-redux';

export default function TransactionsContainer() {
  const currentCategory = useSelector(state => state.dropdown.category);
  const transactionType = useSelector(state => state.dropdown.transactionType);
  const transactionsArray = useSelector(
    state => state.transactions.transactions,
  );

  const returnTransaction = (transaction, index) => {
    return (
      <Transaction
        key={index}
        _id={transaction._id}
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
        {transactionsArray.length === 0 && <NoTransactionsDisplay />}
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
