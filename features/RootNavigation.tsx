import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '@/reducers/userSlice';

import Login from '@components/login/Login';
import Register from '@components/register/Register';
import TabNavigator from '@components/TabNavigator';
import Profile from '@components/profile/Profile';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //if (user.isLoading) {
  //return <Text>Loading...</Text>;
  //}

  return (
    <Stack.Navigator>
      {!user.isLogged ? (
        <>
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                orientation: 'portrait',
                headerShown: false,
              }}
            />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: 'modal',
            }}>
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerTitle: 'Crear cuenta',
                headerTintColor: Colors.white,
                headerStyle: {
                  backgroundColor: Colors.blue900,
                },
                headerBackTitle: '',
              }}
            />
          </Stack.Group>
        </>
      ) : (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainScreen" component={TabNavigator} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
