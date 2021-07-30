/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '@components/login/Login';

import {store} from '@/store';

const Stack = createNativeStackNavigator();

const App = () => {
  //const isDarkMode = useColorScheme() === 'dark';

  //const backgroundStyle = {
  //backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //};

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
export default App;
