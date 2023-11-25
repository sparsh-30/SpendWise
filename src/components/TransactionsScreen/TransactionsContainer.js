import {ScrollView, View} from 'react-native';
import Transaction from './../Transaction';
import {useSelector} from 'react-redux';
import DummyTransactionsArray from '../../DummyTrasactionsData';

export default function TransactionsContainer() {
  const currentCategory = useSelector(state => state.dropdown.category);
  const transactionType = useSelector(state => state.dropdown.transactionType);

  // Obtaining all transactions in form of an array
  // const categoryArray = getAllCategoryArray();

  const transactionsArray = DummyTransactionsArray;

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
      <View className="w-11/12 mx-auto">
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
