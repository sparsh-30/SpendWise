import {NavigationContainer} from '@react-navigation/native';
import {useRef,useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Platform, StatusBar, TouchableNativeFeedback} from 'react-native';
import Home from 'react-native-vector-icons/Entypo';
import Transactions from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/AntDesign';
import Graph from 'react-native-vector-icons/Octicons';
import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import Add from '../screens/Add';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import colors from '../colors';
import {useSelector,useDispatch} from 'react-redux';
import { initialiseData } from '../store/TransactionsSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const theme = useSelector(state => state.theme.theme);
  const dispatch=useDispatch();

  const bottomSheetRef = useRef(null);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('transactions-data');
      if (value !== null) {
        const temp=JSON.parse(value);
        dispatch(initialiseData(temp));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    getData();
  },[])

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor={
          theme === 'light' ? colors.light.background : colors.dark.background
        }
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <Tab.Navigator
        screenOptions={() => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: 'flex',
            position: 'absolute',
            bottom: 10,
            left: 20,
            right: 20,
            elevation: 5,
            backgroundColor:
              theme === 'light' ? colors.light.primary : colors.dark.primary,
            borderRadius: 10,
            height: 50,
          },
          tabBarShowLabel: false,
          headerShown: false,
        })}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={
                  {
                    // top: Platform.OS === 'ios' ? 10 : 0,
                  }
                }>
                <Home
                  name="home"
                  size={30}
                  color={focused ? 'white' : '#9594e5'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="TransactionsScreen"
          component={TransactionsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={
                  {
                    // top: Platform.OS === 'ios' ? 10 : 0,
                  }
                }>
                <Transactions
                  name="money-bill-transfer"
                  size={28}
                  color={focused ? 'white' : '#9594e5'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarButton: ({focused}) => (
              <TouchableNativeFeedback
                onPress={() => bottomSheetRef.current.snapToIndex(2)}>
                <View
                  style={{
                    top: -20,
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    backgroundColor: 'white',
                    // top: Platform.OS === 'ios' ? -10 : -20,
                    // width: Platform.OS === 'ios' ? 50 : 50,
                    // height: Platform.OS === 'ios' ? 50 : 50,
                    // borderRadius: Platform.OS === 'ios' ? 25 : 30,
                    // backgroundColor: 'white',
                  }}>
                  <Icon
                    name="pluscircle"
                    size={Platform.OS === 'ios' ? 50 : 50}
                    color={focused ? '#ff4162' : '#ff748c'}
                  />
                </View>
              </TouchableNativeFeedback>
            ),
            tabBarIconStyle: {},
          }}
        />
        <Tab.Screen
          name="AnalyticsScreen"
          component={AnalyticsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={
                  {
                    // top: Platform.OS === 'ios' ? 10 : 0,
                  }
                }>
                <Graph
                  name="graph"
                  size={30}
                  color={focused ? 'white' : '#9594e5'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={
                  {
                    // top: Platform.OS === 'ios' ? 10 : 0,
                  }
                }>
                <Icon
                  name="setting"
                  size={30}
                  color={focused ? 'white' : '#9594e5'}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      <Add bottomSheetRef={bottomSheetRef} />
    </NavigationContainer>
  );
}
