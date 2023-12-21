import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from './src/Onboarding/WelcomeScreen';
import BottomTabs from './src/navigation/BottomTabs';
import OnboardingScreens from './src/Onboarding/OnboardingScreens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/store/store';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hideSplashScreen, setHideSplashScreen] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      const value = await AsyncStorage.getItem('onboarding');
      if (value === null) {
        await AsyncStorage.setItem('onboarding', 'userOnboarded');
        setShowOnboarding(true);
      }
    };
    checkOnboarding();
    hideSplashScreen ? '' : SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <SafeAreaProvider>
          {showOnboarding ? (
            <OnboardingScreens setShowOnboarding={setShowOnboarding} />
          ) : (
            <BottomTabs setHideSplashScreen={setHideSplashScreen} />
          )}
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
