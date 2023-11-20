import {ScrollView, View} from 'react-native';
import Transaction from './../Transaction';
import {getAllCategoryArray} from './../../categoryLinks';

export default function TransactionsContainer() {
  const categoryArray = getAllCategoryArray();

  return (
    <ScrollView>
      <View className="w-11/12 mx-auto">
        {categoryArray.map((category, index) => {
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
