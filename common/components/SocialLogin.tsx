import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';

const SocialLogin = () => {
  return (
    <View style={styles.socialLogin}>
      <IconButton
        icon="facebook"
        size={48}
        color={Colors.blue700}
        style={styles.socialButton}
        onPress={() => {}}
      />
      <IconButton
        icon="google"
        size={48}
        color={Colors.red600}
        style={styles.socialButton}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  socialLogin: {flexDirection: 'row', justifyContent: 'center'},
});

export default SocialLogin;
