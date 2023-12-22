import {View, Text, Image, Animated, I18nManager} from 'react-native';
import {useRef} from 'react';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';
import MyText from './../../MyText';
import colors from './../../colors';
import {useSelector, useDispatch} from 'react-redux';
import {saveTransactionData} from '../../store/TransactionsSlice';
import {getObjectFromCategoryName} from './../../categoryLinks';

const AnimatedView = Animated.createAnimatedComponent(View);

const Transaction = props => {
  const theme = useSelector(state => state.theme.theme);
  const transactionsData = useSelector(state => state.transactions);
  const dispatch = useDispatch();
  const swipeableRowRef = useRef(null);
  const categoryObject = getObjectFromCategoryName(props.category);

  const renderLeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <RectButton
        className="bg-red-500 flex-1 justify-end items-center"
        style={{
          backgroundColor: theme === 'light' ? '#ef5350' : '#d32f2f',
          flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
          borderRadius: 8,
        }}
        onPress={closeSwipeable}>
        <AnimatedView style={{transform: [{scale}]}}>
          <View className="ml-4 flex flex-row justify-center items-center">
            <Delete name="delete" size={32} color="white" />
            <Text className="ml-1 font-extrabold text-white text-xl">
              Delete
            </Text>
          </View>
        </AnimatedView>
      </RectButton>
    );
  };

  const closeSwipeable = () => {
    const tempTransactionsArray = transactionsData.transactions.filter(
      transaction => {
        return transaction._id !== props._id;
      },
    );
    const objectToSave = {
      totalExpense:
        props.expense === true
          ? (transactionsData.totalExpense -= Number(props.value))
          : transactionsData.totalExpense,
      totalIncome:
        props.expense === false
          ? (transactionsData.totalIncome -= Number(props.value))
          : transactionsData.totalIncome,
      transactions: tempTransactionsArray,
    };
    dispatch(saveTransactionData(objectToSave));
    swipeableRowRef.current.close();
  };

  return (
    <View className="w-11/12 mx-auto rounded-lg">
      <Swipeable
        ref={swipeableRowRef}
        friction={2}
        leftThreshold={80}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        // onSwipeableOpen={}
        // onSwipeableClose={}
        containerStyle={{
          marginVertical: 8,
          overflow: 'visible',
          borderRadius: 8,
        }}
        renderLeftActions={renderLeftActions}>
        <View
          className="p-3 rounded-lg"
          style={{
            zIndex: 100,
            shadowColor:
              theme === 'light' ? colors.light.shadow : colors.dark.shadow,
            elevation: 5,
            backgroundColor:
              theme === 'light'
                ? colors.light.background
                : colors.dark.background,
          }}>
          <View className="flex flex-row items-center">
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
                {props.expense === true ? '-' : '+'} ₹{' '}
                {Number(props.value).toLocaleString('en-IN')}
              </Text>
            </View>
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

export default Transaction;
