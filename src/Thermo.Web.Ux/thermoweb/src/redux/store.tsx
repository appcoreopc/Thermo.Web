import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./reducers";
import createSagaMiddleware from 'redux-saga'
import { mySaga }  from '../sagas/userSagas';

const sagaMiddleware = createSagaMiddleware()
export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);