import {View, Image, StatusBar, Appearance} from 'react-native';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {initialiseData} from './../store/TransactionsSlice';
import {setUserName, setUserImage} from './../store/userSlice';
import {toggleMode} from './../store/themeSlice';
import colors from '../colors';
import Logo from './../../assets/spendwise_white.png';

export default function WelcomeScreen({setShowApp}) {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  const initialiseApp = async () => {
    try {
      const theme = await AsyncStorage.getItem('theme');
      if (theme === null) {
        const systemTheme = Appearance.getColorScheme();
        dispatch(toggleMode(systemTheme));
      } else {
        dispatch(toggleMode(theme));
      }

      const value = await AsyncStorage.getItem('transactions-data');
      if (value !== null) {
        const temp = JSON.parse(value);
        dispatch(initialiseData(temp));
      }

      const userName = await AsyncStorage.getItem('user-name');
      dispatch(setUserName(userName));

      const userImage = await AsyncStorage.getItem('user-image');
      dispatch(setUserImage(userImage));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await initialiseApp();
      setShowApp(true);
    };
    loadData();
  }, []);

  return (
    <View
      style={{
        backgroundColor:
          theme === 'light' ? colors.light.primary : colors.dark.background,
      }}
      className="flex-1 justify-center items-center">
      <StatusBar
        animated={true}
        backgroundColor={
          theme === 'light' ? colors.light.primary : colors.dark.background
        }
        barStyle={'light-content'}
      />
      <Image style={{height: 200, width: 200}} source={Logo} />
    </View>
  );
}
