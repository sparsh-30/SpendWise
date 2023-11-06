import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../../colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Income_Expense() {
  return (
    <View className="my-5">
      <View className="flex flex-row justify-evenly">
        <Card expense={true} value="5000" />
        <Card expense={false} value="2000" />
      </View>
    </View>
  );
}

const Card = (props) => {
  const theme=useSelector((state)=> state.theme.theme)
  return (
    <View className="w-[45%] py-3 rounded-xl border-[1px] border-gray-100">
      <Text className="text-center">{props.expense===true?"Expenses":"Income"}</Text>
      <View className="flex flex-row justify-center my-2 mb-3">
        <View style={{borderColor:props.expense===true?'#d32f2f':'#2e7d32'}} className="border-[2px] rounded-md h-fit px-1 flex justify-center items-center">
          <Icon name={props.expense===true?"trending-down":"trending-up"} size={16} color={props.expense===true?'#d32f2f':'#2e7d32'} />
        </View>
        <Text className="text-[20px] font-bold">  ₹ {props.value}</Text>
      </View>
        <TouchableOpacity style={{backgroundColor:colors.light.primary}} className="w-4/5 mx-auto py-2 rounded-lg">
          <Text className="text-center font-bold">{props.expense===true?"ADD EXPENSE":"ADD INCOME"}</Text>
        </TouchableOpacity>
    </View>
  );
};
