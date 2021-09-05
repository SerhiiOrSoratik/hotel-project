export const reducer = (state = {}, action: any) => {
    let newState = {};
    switch (action.type) {
        case "FIND_FREE_ROOMS":
            newState = Object.assign(action.visitorInfo)
            return newState
        default: 
        return state;
        case 'ADD_NEW_VISITOR': 
            newState = Object.assign(action.data);
            return newState;
        }
}