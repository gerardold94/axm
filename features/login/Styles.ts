import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: '45%',
  },
  login: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    flex: 3,
    justifyContent: 'space-between',
    padding: 32,
  },
  logo: {
    height: '50%',
    width: '50%',
    zIndex: 2,
  },
  topImage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'black',
    flex: 1,
    height: '100%',
    left: 0,
    opacity: 0.4,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  input: {
    marginVertical: 8,
    marginBottom: 8,
  },
  forgot: {
    color: Colors.grey600,
    fontWeight: '600',
    textAlign: 'right',
  },
  loginButton: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  loginButtonContent: {
    paddingVertical: 8,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  registerLink: {
    color: Colors.blueA400,
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
    textDecorationColor: Colors.blueA100,
  },
});
