import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTabs from './src/navigation/BottomTabs';
import {Provider} from 'react-redux';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <BottomTabs />
      </SafeAreaProvider>
    </Provider>
  );
}
