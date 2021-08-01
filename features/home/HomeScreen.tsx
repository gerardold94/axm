import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';

const HomeScreen = () => {
  StatusBar.setBarStyle('dark-content');

  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
