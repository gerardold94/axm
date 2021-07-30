import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '@/reducers/counterSlice';
import rootSaga from '@/sagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: counterReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
