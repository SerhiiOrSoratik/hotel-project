export const reducer = (state = [], action: any) => {
    switch (action.type) {
        case "FIND_FREE_ROOMS":
            const newState = Object.assign(action.data)
            return newState
        default: 
        return state;
        }
}