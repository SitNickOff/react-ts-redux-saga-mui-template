import { createStore, applyMiddleware, compose } from "redux";
// import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import localStorage from '../middleware/local-storage';

import rootReducer from "../reducers";
// import { ApiReducer as rootReducer } from "../reducers/api";
import rootSaga from '../sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, /*routerMiddleware(history),*/ localStorage('portals'))
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;