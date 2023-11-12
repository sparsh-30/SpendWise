import {View, Text, TouchableNativeFeedback, Image} from 'react-native';
import MyText from '../../MyText';
import colors from '../../colors';
import {useSelector} from 'react-redux';
import getLinkFromCategoryName from '../../categoryLinks';

export default function RecentTransactions() {
  const theme = useSelector(state => state.theme.theme);
  return (
    <View className="w-11/12 mx-auto">
      <View className="flex flex-row justify-between mb-2">
        <MyText>Recent Transactions</MyText>
        <TouchableNativeFeedback>
          <Text
            style={{
              color:
                theme === 'light' ? colors.light.primary : colors.dark.primary,
              fontWeight: 600,
            }}>
            See All
          </Text>
        </TouchableNativeFeedback>
      </View>
      <View>
        <RTCard
          expense={false}
          title="Recieved from Ujjwal"
          category="education"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <RTCard
          expense={true}
          title="Recieved from Ujjwal"
          category="entertainment"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <RTCard
          expense={false}
          title="Recieved from Ujjwal"
          category="groceries"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <RTCard
          expense={false}
          title="Recieved from Ujjwal"
          category="healthcare"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <RTCard
          expense={false}
          title="Recieved from Ujjwal"
          category="house_rent"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <RTCard
          expense={false}
          title="Recieved from Ujjwal"
          category="insurance"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <RTCard
          expense={false}
          title="Recieved from Ujjwal"
          category="loan"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <RTCard
          expense={false}
          title="Recieved from Ujjwal"
          category="maintenance"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <RTCard
          expense={false}
          title="Recieved from Ujjwal"
          category="others"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <RTCard
          expense={false}
          title="Recieved from Ujjwal"
          category="savings"
          time="11/9/23 12:21 PM"
          value={2500}
        />
        <RTCard
          expense={false}
          title="Recieved from Ujjwal"
          category="transportation"
          time="11/9/23 12:21 PM"
          value={2500}
        />
      </View>
    </View>
  );
}

const RTCard = props => {
  const theme = useSelector(state => state.theme.theme);
  const categoryName = getLinkFromCategoryName(props.category);
  return (
    <TouchableNativeFeedback>
      <View
        className="my-2 px-3 py-3 flex flex-row items-center rounded-lg"
        style={{
          shadowColor:
            theme === 'light' ? colors.light.shadow : colors.dark.shadow,
          elevation: 5,
          backgroundColor:
            theme === 'light'
              ? colors.light.background
              : colors.dark.background,
        }}>
        <View className="h-10 w-10">
          <Image className="w-full h-full" source={categoryName} />
        </View>
        <View className="flex flex-row flex-1 justify-between items-center pl-6">
          <View className="w-2/3">
            <Text
              className="font-[900] text-[16px]"
              style={{
                color:
                  theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary,
              }}>
              {props.title}
            </Text>
            {/* <MyText>{props.category}</MyText> */}
            <MyText>{props.time}</MyText>
          </View>
          <Text
            className="font-bold"
            style={{color: props.expense === true ? '#d32f2f' : '#2e7d32'}}>
            {props.expense === true ? '-' : '+'} ₹ {props.value}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
