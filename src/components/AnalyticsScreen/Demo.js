import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import moment from 'moment';
import {BarChart} from 'react-native-gifted-charts';
import {useSelector} from 'react-redux';
import colors from '../../colors';

export default function Demo() {
  const transactions = useSelector(state => state.transactions.transactions);
  const [pastTransactionsData, setPastTransactionsData] = useState({
    pastDaysLabels: [],
    totalExpenseArray: [],
    totalIncomeArray: [],
  });
  const numberofDays = 7;

  const updatePastDaysTransactions = () => {
    const transactionArray = [...transactions];
    const currentDate = moment();
    const categorizedDates = {};
    for (let i = 0; i < numberofDays; i++) {
      const dateKey = currentDate.clone().subtract(i, 'days').format('D MMM');
      categorizedDates[dateKey] = [];
    }

    for (let i = 0; i < transactionArray.length; i++) {
      const transaction = transactionArray[i];
      const momentDate = moment(transaction.date, 'DD/MM/YYYY, h:mm a');
      const daysDifference = currentDate.diff(momentDate, 'days');
      if (daysDifference < numberofDays) {
        const dayKey = momentDate.format('D MMM');
        if (!categorizedDates[dayKey]) categorizedDates[dayKey] = [];
        categorizedDates[dayKey].push({
          amount: transaction.amount,
          expense: transaction.expense,
        });
      } else break;
    }

    let pastDaysLabels = Object.keys(categorizedDates).sort((a, b) => {
      const dateA = moment(a, 'D MMM');
      const dateB = moment(b, 'D MMM');
      return dateA - dateB;
    });
    const past7DaysTransactions = pastDaysLabels.map(
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

    pastDaysLabels.pop();
    pastDaysLabels.push('Today');

    setPastTransactionsData({
      pastDaysLabels: pastDaysLabels,
      totalExpenseArray: totalExpenseArray,
      totalIncomeArray: totalIncomeArray,
    });
  };

  useEffect(() => {
    updatePastDaysTransactions();
  }, [transactions]);

  return (
    <View className="my-4">
      <Graph pastTransactionsData={pastTransactionsData} />
    </View>
  );
}

const Graph = ({pastTransactionsData}) => {
  const theme = useSelector(state => state.theme.theme);
  const [data, setData] = useState([]);
  const [maxValue, setMaxValue] = useState(100);
  useEffect(() => {
    let barData = [];
    let maximum = 0;
    for (let i = 0; i < pastTransactionsData.pastDaysLabels.length; i++) {
      const incomeBarObject = {
        value: pastTransactionsData.totalIncomeArray[i],
        label: pastTransactionsData.pastDaysLabels[i],
        spacing: 2,
        labelWidth: 45,
        labelTextStyle: {color: theme === 'light' ? 'gray' : 'white'},
        frontColor: '#2e7d32',
      };
      barData.push(incomeBarObject);
      const expenseBarObject = {
        value: pastTransactionsData.totalExpenseArray[i],
        frontColor: '#d32f2f',
      };
      barData.push(expenseBarObject);
      maximum = Math.max(
        maximum,
        Math.max(
          pastTransactionsData.totalIncomeArray[i],
          pastTransactionsData.totalExpenseArray[i],
        ),
      );
    }
    setData(barData);
    setMaxValue(maximum);
  }, [pastTransactionsData]);

  const renderTitle = () => {
    return (
      <View style={{marginVertical: 0}}>
        <Text
          style={{
            color:
              theme === 'light' ? colors.light.primary : colors.dark.primary,
            fontSize: 20,
            fontWeight: 800,
            textAlign: 'center',
          }}>
          Past 7 Days Comparison
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 24,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#2e7d32',
                marginRight: 8,
              }}
            />
            <Text
              style={{
                color:
                  theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary,
                fontWeight: 600,
              }}>
              Income
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#d32f2f',
                marginRight: 8,
              }}
            />
            <Text
              style={{
                color:
                  theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary,
                fontWeight: 600,
              }}>
              Expense
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor:
          theme === 'light' ? colors.light.graph : colors.dark.graph,
      }}
      className="w-11/12 p-3 mx-auto overflow-hidden rounded-xl">
      {renderTitle()}
      {data.length !== 0 && (
        <BarChart
          data={data}
          barWidth={24}
          spacing={22}
          height={250}
          maxValue={maxValue}
          initialSpacing={10}
          barBorderRadius={4}
          showScrollIndicator={true}
          hideRules
          xAxisThickness={3}
          xAxisColor={theme === 'light' ? 'gray' : 'white'}
          yAxisThickness={0}
          yAxisColor={
            theme === 'light' ? colors.light.primary : colors.dark.primary
          }
          yAxisTextStyle={{color: theme === 'light' ? 'gray' : 'white'}}
          noOfSections={5}
          renderTooltip={item => {
            return (
              <View
                style={{
                  marginBottom: 10,
                  marginLeft: -6,
                  backgroundColor:
                    theme === 'light'
                      ? colors.light.primary
                      : colors.dark.primary,
                  paddingHorizontal: 6,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}>
                <Text style={{color: '#fff', fontWeight: 800}}>
                  {item.value}
                </Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};
