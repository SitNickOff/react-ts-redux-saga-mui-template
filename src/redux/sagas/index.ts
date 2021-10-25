import { all, put, takeEvery} from 'redux-saga/effects';
import api from '../../modules/api';
import { apiActions, API_ACTIONS } from '../actions';            

interface IApiLoadParams {
    payload: IPayload,
    type: string
}

interface IPayload {
    [someKey: string]: any
}

export interface IResponse {
    next?: number,
    [someKey: string]: any
}

export function* onApiLoad({payload, type}: IApiLoadParams) {
    const actionType = type.replace(API_ACTIONS.FETCH_START, '').toLowerCase();
    
    try {
        const response: Promise<IResponse> = yield api.fetch(actionType, payload);

        yield put(apiActions.fetchSuccess(actionType, response));        
            
    } catch (error) {
        yield put(apiActions.fetchFailure(actionType, error));
    }
}

export function* watchApiLoad() {
    yield takeEvery((action:any) => action.type.startsWith(API_ACTIONS.FETCH_START), onApiLoad);
}

export default function* rootSaga() {
    yield all([
        watchApiLoad()
    ]);
}