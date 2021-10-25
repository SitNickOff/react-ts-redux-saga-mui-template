export const TASKS = 'tasks';
export const TASK_HISTORY = 'tasks.task.history';

export const PROFILE = 'profile';
export const APP_INFO = 'app.info';

export interface IEndpoint {
    uri: string,
    method: string
};

export interface IEndpoints {
    [pointName: string] : IEndpoint
};

const ENDPOINTS:IEndpoints = {
    [TASKS]: {
        uri: '/tasks.task.list',
        method: 'POST'
    },
    [TASK_HISTORY]: {
        uri: '/tasks.task.history.list',
        method: 'POST'
    },
    [PROFILE]: {
        uri: '/profile',
        method: 'POST'
    },
    [APP_INFO]: {
        uri: '/app.info',
        method: 'POST'
    },
}; 

export default ENDPOINTS;