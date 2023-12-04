import {View, Text, TouchableNativeFeedback, Dimensions} from 'react-native';
import {useState, useEffect} from 'react';
import moment from 'moment';
import {LineChart} from 'react-native-chart-kit';
import {useSelector} from 'react-redux';
import colors from '../../colors';

export default function PastTransactions() {
  const theme = useSelector(state => state.theme.theme);
  const transactions = useSelector(state => state.transactions.transactions);
  const [tabIndex, setTabIndex] = useState(0);
  const [pastTransactionsData, setPastTransactionsData] = useState({
    past7DaysLabels: [],
    totalExpenseArray: [],
    totalIncomeArray: [],
  });

  const updatePast7DaysTransactions = () => {
    const transactionArray = [...transactions];
    const currentDate = moment();
    const categorizedDates = {};
    for (let i = 0; i < 6; i++) {
      const dateKey = currentDate.clone().subtract(i, 'days').format('D MMM');
      categorizedDates[dateKey] = [];
    }

    transactionArray.forEach(transaction => {
      const momentDate = moment(transaction.date, 'DD/MM/YYYY, h:mm a');
      const daysDifference = currentDate.diff(momentDate, 'days');
      if (daysDifference < 6) {
        const dayKey = momentDate.format('D MMM');
        if (!categorizedDates[dayKey]) categorizedDates[dayKey] = [];
        categorizedDates[dayKey].push({
          amount: transaction.amount,
          expense: transaction.expense,
        });
      }
    });

    const past7DaysLabels = Object.keys(categorizedDates).sort((a, b) => {
      const dateA = moment(a, 'D MMM');
      const dateB = moment(b, 'D MMM');
      return dateA - dateB;
    });
    const past7DaysTransactions = past7DaysLabels.map(
      key => categorizedDates[key],
    );

    let totalIncomeArray = [];
    let totalExpenseArray = [];
    past7DaysTransactions.forEach(transactionsOnTheDay => {
      let totalIncomeOnTheDay = 0;
      let totalExpenseOnTheDay = 0;
      transactionsOnTheDay.map(transaction => {
        if (transaction.expense === true)
          totalExpenseOnTheDay += Number(transaction.amount);
        else totalIncomeOnTheDay += Number(transaction.amount);
      });
      totalIncomeArray.push(totalIncomeOnTheDay);
      totalExpenseArray.push(totalExpenseOnTheDay);
    });

    setPastTransactionsData({
      past7DaysLabels: past7DaysLabels,
      totalExpenseArray: totalExpenseArray,
      totalIncomeArray: totalIncomeArray,
    });
  };

  useEffect(() => {
    updatePast7DaysTransactions();
  }, [transactions]);

  return (
    <View>
      <View
        className="w-4/5 my-7 mx-auto flex flex-row h-12 rounded-md overflow-hidden z-10"
        style={{
          backgroundColor:
            theme === 'light'
              ? colors.light.background
              : colors.dark.background,
          shadowColor:
            theme === 'light' ? colors.light.shadow : colors.dark.shadow,
          elevation: 5,
        }}>
        <TouchableNativeFeedback onPress={() => setTabIndex(0)}>
          <View
            className="w-1/2 flex justify-center items-center z-20"
            style={{
              backgroundColor:
                tabIndex === 0
                  ? theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary
                  : theme === 'light'
                  ? colors.light.background
                  : colors.dark.background,
            }}>
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
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => setTabIndex(1)}>
          <View
            className="w-1/2 flex justify-center items-center z-20"
            style={{
              backgroundColor:
                tabIndex === 1
                  ? theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary
                  : theme === 'light'
                  ? colors.light.background
                  : colors.dark.background,
            }}>
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
              Expense
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View className="w-5/6">
        <BezierGraph
          pastTransactionsData={pastTransactionsData}
          tabIndex={tabIndex}
        />
      </View>
    </View>
  );
}

const BezierGraph = ({pastTransactionsData, tabIndex}) => {
  const theme = useSelector(state => state.theme.theme);
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: pastTransactionsData.past7DaysLabels,
    datasets: [
      {
        data:
          tabIndex === 0
            ? pastTransactionsData.totalIncomeArray
            : pastTransactionsData.totalExpenseArray,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom:
      theme === 'light' ? colors.light.background : colors.dark.background,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo:
      theme === 'light' ? colors.light.background : colors.dark.background,
    backgroundGradientToOpacity: 1,
    color: () =>
      theme === 'light' ? colors.light.primary : colors.dark.primary,
    strokeWidth: 3,
  };

  return (
    <View>
      {pastTransactionsData.past7DaysLabels.length !== 0 && (
        <LineChart
          data={data}
          width={screenWidth}
          height={300}
          // withDots={false}
          chartConfig={chartConfig}
          withInnerLines={false}
          withOuterLines={false}
          yLabelsOffset={10}
          fromZero={true}
          formatYLabel={value => {
            value.toString();
            return value.slice(0, -3);
          }}
          bezier
        />
      )}
    </View>
  );
};
