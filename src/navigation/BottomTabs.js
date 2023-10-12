import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import Add from '../screens/Add';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Transactions"
        component={TransactionsScreen}
      />
      <Tab.Screen options={{headerShown: false}} name="Add" component={Add} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Analytics"
        component={AnalyticsScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
