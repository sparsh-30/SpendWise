import { StatusBar } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTabs from './src/navigation/BottomTabs';
import {Provider} from 'react-redux';
import store from './src/store/store';
import colors from './src/colors';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <StatusBar backgroundColor={colors.dark.background} />
        <BottomTabs />
      </SafeAreaProvider>
    </Provider>
  );
}
