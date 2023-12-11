import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import {BarChart} from 'react-native-gifted-charts';
import {useSelector} from 'react-redux';
import colors from '../../colors';

export default function BarGraph({pastTransactionsData}) {
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
            fontSize: 18,
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
            marginTop: 12,
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
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
}
