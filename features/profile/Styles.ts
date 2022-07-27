import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

export const Styles = StyleSheet.create({
    surface: {
      borderRadius: 4,
      flex: 1,
      padding: 8,
      margin: 8,
      elevation: 4,
      backgroundColor: Colors.white
    },
    input: {
      backgroundColor: Colors.grey100,
      marginVertical: 4
    },
    inputBorder: {
      width: '30%',
      borderRadius: 8,
      borderColor: '#cacaca',
      borderWidth: 1,
      marginBottom: 20,
    },
    submit: {
      marginVertical: 16,
    },
    submitContent: {
      paddingVertical: 8,
    },
    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
});