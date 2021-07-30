import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Colors from '@common/colors';

const image = require('@assets/images/login.jpg');

const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.topImage} />
        <View style={styles.login}>
          <Text>Bottom</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '45%',
  },
  login: {
    alignItems: 'center',
    //backgroundColor: Colors.WHITE,
    backgroundColor: 'red',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 3,
    justifyContent: 'center',
    padding: 8,
  },
  topImage: {
    flex: 1.5,
  },
});

export default Login;
export default Login;
