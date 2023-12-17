import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import colors from '../../colors';
import {getAllCategoryArray} from '../../categoryLinks';
import DonutChart from './DonutChart';
import Category from './Category';
import NoTransactionsDisplay from '../../NoTransactionsDisplay';

export default function CategoryAnalysis() {
  const theme = useSelector(state => state.theme.theme);
  const transactions = useSelector(state => state.transactions.transactions);
  const [tabIndex, setTabIndex] = useState(1);
  const [allCategoriesData, setAllCategoriesData] = useState({
    allCategories: [],
    incomeCategories: [],
    expenseCategories: [],
  });
  const [data, setData] = useState([]);

  const handleTabChange = index => {
    if (index === 0) setData(allCategoriesData.incomeCategories);
    else if (index === 1) setData(allCategoriesData.allCategories);
    else setData(allCategoriesData.expenseCategories);
  };

  const arrangeCategoryWise = () => {
    const transactionsArray = [...transactions];
    const categoriesArray = getAllCategoryArray();

    let categoriesObject = {};
    categoriesArray.forEach(category => {
      categoriesObject[category.categoryTitle] = 0;
    });

    transactionsArray.forEach(transaction => {
      categoriesObject[transaction.category] += Number(transaction.amount);
    });

    let pieChartData = [];

    categoriesArray.forEach(category => {
      const dataObject = {
        value: categoriesObject[category.categoryTitle],
        color: category.color,
        text: category.categoryTitle,
        expense: category.expense,
      };
      pieChartData.push(dataObject);
    });

    let tempIncomeCategoriesArray = [];
    let tempExpenseCategoriesArray = [];

    pieChartData.forEach(dataObject => {
      if (dataObject.expense === true)
        tempExpenseCategoriesArray.push(dataObject);
      else tempIncomeCategoriesArray.push(dataObject);
    });

    setAllCategoriesData({
      allCategories: pieChartData,
      incomeCategories: tempIncomeCategoriesArray,
      expenseCategories: tempExpenseCategoriesArray,
    });

    if (tabIndex === 0) setData(tempIncomeCategoriesArray);
    else if (tabIndex === 1) setData(pieChartData);
    else setData(tempExpenseCategoriesArray);
  };

  const dataPresent = () => {
    const tempData = [...data];
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].value !== 0) return true;
    }
    return false;
  };

  useEffect(() => {
    handleTabChange(tabIndex);
  }, [tabIndex]);

  useEffect(() => {
    arrangeCategoryWise();
  }, [transactions]);

  return (
    <View>
      <View
        className="w-5/6 h-14 my-5 flex flex-row rounded-full mx-auto overflow-hidden"
        style={{
          backgroundColor:
            theme === 'light'
              ? colors.light.background
              : colors.dark.background,
          shadowColor:
            theme === 'light' ? colors.light.shadow : colors.dark.shadow,
          elevation: 5,
        }}>
        <TouchableWithoutFeedback onPress={() => setTabIndex(0)}>
          <View
            style={{
              backgroundColor:
                tabIndex === 0
                  ? theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary
                  : theme === 'light'
                  ? colors.light.background
                  : colors.dark.background,
            }}
            className="w-1/3 flex justify-center items-center overflow-hidden rounded-full">
            <Text
              style={{
                color:
                  tabIndex === 0
                    ? 'white'
                    : theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary,
              }}
              className="text-lg font-extrabold">
              Income
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setTabIndex(1)}>
          <View
            style={{
              backgroundColor:
                tabIndex === 1
                  ? theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary
                  : theme === 'light'
                  ? colors.light.background
                  : colors.dark.background,
            }}
            className="w-1/3 flex justify-center items-center overflow-hidden rounded-full">
            <Text
              style={{
                color:
                  tabIndex === 1
                    ? 'white'
                    : theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary,
              }}
              className="text-lg font-extrabold">
              Both
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setTabIndex(2)}>
          <View
            style={{
              backgroundColor:
                tabIndex === 2
                  ? theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary
                  : theme === 'light'
                  ? colors.light.background
                  : colors.dark.background,
            }}
            className="w-1/3 flex justify-center items-center overflow-hidden rounded-full">
            <Text
              style={{
                color:
                  tabIndex === 2
                    ? 'white'
                    : theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary,
              }}
              className="text-lg font-extrabold">
              Expense
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {!dataPresent() ? (
        <NoTransactionsDisplay />
      ) : (
        <View>
          <View className="mx-auto">
            <DonutChart data={data} />
          </View>
          <View className="">
            {data.map((d, index) => {
              if (d.value !== 0)
                return (
                  <Category
                    key={index}
                    expense={d.expense}
                    text={d.text}
                    value={d.value}
                  />
                );
            })}
          </View>
        </View>
      )}
    </View>
  );
}
