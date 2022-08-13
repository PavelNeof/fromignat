import {initialPeopleType, UserType} from "../HW8";
import {ChangeTodoListTitleAT} from "./tests/homeWorkReducer.test";

export const homeWorkReducer = (state: initialPeopleType, action: ChangeTodoListTitleAT): initialPeopleType => {
    switch (action.type) {
        case 'sort': {
            let newState = [] as initialPeopleType

            if (action.payload === 'up') {
                newState = [...state.sort((a: UserType, b: UserType) => a.age > b.age ? 1 : -1)]
            }
            if (action.payload === 'down') {
                newState = [...state.sort((a: UserType, b: UserType) => a.age < b.age ? 1 : -1)]
            }
            return newState
        }
        case 'check': {

            return state.filter((el: UserType) => el.age > action.payload)
        }
        default:
            return state
    }
}