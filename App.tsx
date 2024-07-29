/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStackOrg from './src/components/RootStackOrg';
import {Provider} from 'react-redux';
import {store} from './store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const insets = useSafeAreaInsets();

  return (
    <Provider store={store}>
      <SafeAreaProvider style={backgroundStyle.backgroundColor}>
        <RootStackOrg />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
