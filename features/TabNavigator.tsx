import React, {useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '@components/home/HomeScreen';
import WeekImage from '@components/weekimage/WeekImage';
import {Colors} from 'react-native-paper';
import {StatusBar} from 'react-native';
import {showHeader, getTitle} from '@common/utils';
import Settings from '@components/settings/Settings';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = ({navigation, route}: any) => {
  StatusBar.setHidden(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: showHeader(route),
      headerTitle: getTitle(route),
      headerTitleStyle: {
        fontSize: 22,
      },
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator labeled={false}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarColor: Colors.blueGrey900,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="WeekImage"
        component={WeekImage}
        options={{
          tabBarColor: Colors.blueGrey900,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="image" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Image"
        component={HomeScreen}
        options={{
          tabBarColor: Colors.blueGrey900,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="image" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarColor: Colors.blueGrey900,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
