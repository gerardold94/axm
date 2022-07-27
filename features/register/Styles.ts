import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    height: 128,
    width: 128,
  },
  cta: {
    color: Colors.grey600,
    fontWeight: '600',
    marginVertical: 16,
    textAlign: 'justify',
  },
  input: {
    width: '100%',
  },
  submit: {
    marginVertical: 16,
  },
  submitContent: {
    paddingVertical: 8,
  },
});
