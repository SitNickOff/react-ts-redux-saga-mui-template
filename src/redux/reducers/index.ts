import { combineReducers } from 'redux';
import { IRootReducer } from './state';
import { ApiReducer } from './api';

const rootReducer = combineReducers<IRootReducer>({
    api: ApiReducer as any
});

export default rootReducer;