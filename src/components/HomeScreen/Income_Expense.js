import {View, Text, TouchableOpacity} from 'react-native';
import MyText from '../../MyText';
import {useSelector,useDispatch} from 'react-redux';
import colors from '../../colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { openBottomSheet, setTransactionType } from '../../store/bottomSheetSlice';

export default function Income_Expense() {
  const totalExpense=useSelector((state)=> state.transactions.totalExpense);
  const totalIncome=useSelector((state)=> state.transactions.totalIncome);
  return (
    <View className="my-5">
      <View className="flex flex-row justify-evenly">
        <Card expense={false} value={totalIncome} />
        <Card expense={true} value={totalExpense} />
      </View>
    </View>
  );
}

const Card = props => {
  const theme = useSelector(state => state.theme.theme);
  const dispatch=useDispatch();

  const handleBottomSheetOpen = () => {
    dispatch(openBottomSheet());
    if(props.expense===true) dispatch(setTransactionType('expense'));
    else dispatch(setTransactionType('income'));
  }

  return (
    <View
      style={{
        elevation: 5,
        shadowColor:
          theme === 'light' ? colors.light.shadow : colors.dark.shadow,
        backgroundColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
      }}
      className="w-[45%] py-3 rounded-lg">
      <MyText class="text-center">
        {props.expense === true ? 'Expenses' : 'Income'}
      </MyText>
      <View className="flex flex-row justify-center my-2 mb-3">
        <View
          style={{borderColor: props.expense === true ? '#d32f2f' : '#2e7d32'}}
          className="border-[2px] rounded-md h-fit px-1 flex justify-center items-center">
          <Icon
            name={props.expense === true ? 'trending-down' : 'trending-up'}
            size={16}
            color={props.expense === true ? '#d32f2f' : '#2e7d32'}
          />
        </View>
        <Text
          style={{
            color: theme === 'light' ? colors.light.text : colors.dark.text,
          }}
          className="text-[20px] font-bold">
          {' '}
          ₹ {Number(props.value)}
        </Text>
      </View>
      <TouchableOpacity
        onPress={()=> handleBottomSheetOpen()}
        style={{
          backgroundColor:
            theme === 'light' ? colors.light.primary : colors.dark.primary,
        }}
        className="w-4/5 mx-auto py-2 rounded-lg">
        <Text className="text-center font-bold text-white">
          {props.expense === true ? 'ADD EXPENSE' : 'ADD INCOME'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
