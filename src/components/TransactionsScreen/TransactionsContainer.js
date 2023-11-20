import {ScrollView, View} from 'react-native';
import Transaction from './../Transaction';
import {getAllCategoryArray} from './../../categoryLinks';
import {useSelector} from 'react-redux';

export default function TransactionsContainer() {
  // Obtaining all transactions in form of an array
  const categoryArray = getAllCategoryArray();

  // const currentTransactionType = useSelector(state => state.dropdown.transactionType);
  const currentCategory = useSelector(state => state.dropdown.category);

  return (
    <ScrollView>
      <View className="w-11/12 mx-auto">
        {currentCategory === 'all'
          ? categoryArray.map((category, index) => {
              return (
                <Transaction
                  key={index}
                  expense={index % 2 === 0 ? true : false}
                  title="Lorem Ipsum"
                  category={category.categoryTitle}
                  time="11/15/2023 12:30 PM"
                  value={Math.floor(Math.random() * 10000)}
                />
              );
            })
          : categoryArray.map((category, index) => {
              if (currentCategory === category.categoryTitle)
                return (
                  <Transaction
                    key={index}
                    expense={index % 2 === 0 ? true : false}
                    title="Lorem Ipsum"
                    category={category.categoryTitle}
                    time="11/15/2023 12:30 PM"
                    value={Math.floor(Math.random() * 10000)}
                  />
                );
            })}
      </View>
    </ScrollView>
  );
}
