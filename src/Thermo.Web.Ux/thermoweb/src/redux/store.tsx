import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./reducers";
import createSagaMiddleware from 'redux-saga'
import { userFetchSaga } from '../sagas/users/userFetchSagas';
import { smtpFetchSaga } from '../sagas/smtp/smtpFetchSagas';

const sagaMiddleware = createSagaMiddleware()
export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userFetchSaga);
sagaMiddleware.run(smtpFetchSaga);