const initState: initStateType = {
    loading: false
}
export type initStateType = {
    loading: boolean
}

type loadingAT = {
    type: 'IS_LOADING'
    isLoading: boolean
}
type ActionType = loadingAT

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'IS_LOADING': {
            return state = {...state, loading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): loadingAT => ({type: 'IS_LOADING', isLoading}) // fix any