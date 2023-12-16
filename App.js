import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useState} from 'react';
import WelcomeScreen from './src/Onboarding/WelcomeScreen';
import BottomTabs from './src/navigation/BottomTabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/store/store';

export default function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <SafeAreaProvider>
          {showApp === false ? (
            <WelcomeScreen setShowApp={setShowApp} />
          ) : (
            <BottomTabs />
          )}
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
