import {View, Text, Image} from 'react-native';
import MyText from './../../MyText';
import colors from './../../colors';
import {useSelector} from 'react-redux';
import {getObjectFromCategoryName} from './../../categoryLinks';

const RTCard = props => {
  const theme = useSelector(state => state.theme.theme);
  const categoryObject = getObjectFromCategoryName(props.category);
  return (
    <View>
      <View
        className="my-2 px-3 py-3 flex flex-row items-center rounded-lg"
        style={{
          zIndex:100,
          shadowColor:
            theme === 'light' ? colors.light.shadow : colors.dark.shadow,
          elevation: 5,
          backgroundColor:
            theme === 'light'
              ? colors.light.background
              : colors.dark.background,
        }}>
        <View className="h-10 w-10">
          <Image
            className="w-full h-full"
            source={categoryObject.categoryLink}
          />
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
            <MyText>{props.time}</MyText>
          </View>
          <Text
            className="font-bold"
            style={{color: props.expense === true ? '#d32f2f' : '#2e7d32'}}>
            {props.expense === true ? '-' : '+'} ₹ {props.value}
          </Text>
        </View>
      </View>
      </View>
  );
};

export default RTCard;
