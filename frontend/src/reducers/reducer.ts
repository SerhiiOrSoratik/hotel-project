export const reducer = (state = {}, action: any) => {
    switch (action.type) {
        case "FIND_FREE_ROOMS":
            console.log('aa')
            console.log(action)
            const newState = Object.assign(action.data)
            return newState
    }
}