import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useEffect, useState} from 'react';
import WelcomeScreen from './src/Onboarding/WelcomeScreen';
import BottomTabs from './src/navigation/BottomTabs';
import OnboardingScreens from './src/Onboarding/OnboardingScreens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/store/store';
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  const [showApp, setShowApp] = useState(false);

  useEffect(()=>{
    // setTimeout(()=>{
    //   SplashScreen.hide();
    //   setShowApp(true);
    // },10000);
    setShowApp(true);
    SplashScreen.hide();
  },[])

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <SafeAreaProvider>
          {/* {showApp === false ? (
            <WelcomeScreen setShowApp={setShowApp} />
          ) : (
            <BottomTabs />
          )} */}
          {showApp===true?<OnboardingScreens />:""}
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
