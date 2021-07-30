/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from '@/store';
import {StatusBar, useColorScheme, SafeAreaView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
