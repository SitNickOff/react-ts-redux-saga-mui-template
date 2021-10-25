export interface IRootReducer {
    api: {
        data?: any,
        loading: boolean,
        [someKey: string]: any
    }
}