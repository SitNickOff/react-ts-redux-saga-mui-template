import camelcase from 'camelcase';
import ENDPOINTS from "../../modules/api/endpoints";
import { API_ACTIONS } from '../actions';

function initApiState() {
    return Object.keys(ENDPOINTS).reduce((acc: any, next: string) => {
        const inner = {
            data: null,
            loading: false,
            error: null
        };

        acc[camelcase(next)] = inner;

        return acc;
    }, {});
}

const INITIAL_STATE = initApiState();

export const ApiReducer = (state = INITIAL_STATE, action: any) => {
    
    if (action.type.startsWith(API_ACTIONS.FETCH_START)) {
        const inner = camelcase(action.type.replace(API_ACTIONS.FETCH_START, ''));

        return {
            ...state,
            [inner]: {
                ...state[inner],
                loading: true,
                error: null
            }
        };
    }

    if (action.type.startsWith(API_ACTIONS.FETCH_SUCCESS)) {
        const inner = camelcase(action.type.replace(API_ACTIONS.FETCH_SUCCESS, ''));

        return {
            ...state,
            [inner]: {
                ...state[inner],
                data: state[inner].data ? {...state[inner].data, ...action.payload}: action.payload,
                loading: false,
                error: null
            }
        };
    }

    if (action.type.startsWith(API_ACTIONS.FETCH_FAILURE)) {
        const inner = camelcase(action.type.replace(API_ACTIONS.FETCH_FAILURE, ''));

        return {
            ...state,
            [inner]: {
                ...state[inner],
                loading: false,
                error: action.payload
            }
        };
    }

    if (action.type === 'CLEAN_TASK_HISTORY') {
        return {
            ...state,
            tasksTaskHistory: null
        }
    }

    return {...state};
};