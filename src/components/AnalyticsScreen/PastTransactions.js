import {View} from 'react-native';
import {useState, useEffect} from 'react';
import moment from 'moment';
import {useSelector} from 'react-redux';
import BarGraph from './BarGraph';

export default function PastTransactions() {
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
      <BarGraph pastTransactionsData={pastTransactionsData} />
    </View>
  );
}