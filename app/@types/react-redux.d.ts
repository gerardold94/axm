import 'react-redux';
import {RootState} from '@/reducers/rootReducer';

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
