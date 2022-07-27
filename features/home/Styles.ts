import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 8,
  },
  author: {
    color: Colors.grey800,
    marginHorizontal: 4,
    fontWeight: '300',
  },
  post: {
    marginVertical: 4,
    position: 'relative'
  },
  postInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8
  },
  premium: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 4,
    position: 'absolute',
    padding: 8,
    height: '100%',
    width: '100%'
  },
  premiumText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});