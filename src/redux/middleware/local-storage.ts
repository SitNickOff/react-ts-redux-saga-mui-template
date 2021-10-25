export function loadState(key = 'state') {
    try {
        let json = localStorage.getItem(key);

        if (json===null) {
            return undefined;
        } else {
            return JSON.parse(json);
        }
    } catch (error) {
        return undefined;    
    }
}

const _localStorage = (key:string) => (store:any) => (next:any) => (action:any) => {
    let result = next(action);

    try {
        let json = JSON.stringify(key?store.getState()[key]:store.getState());
        localStorage.setItem(key || 'state', json);
    } catch (error) {
        console.error(error);
    }

    return result;
}

export default _localStorage;