import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTabs from './src/navigation/BottomTabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/store/store';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <SafeAreaProvider>
          <BottomTabs />
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
