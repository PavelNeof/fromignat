import {Dispatch} from "redux";
import {requestAPI} from "./Request-api";

export type InitialStateType = {
    success:boolean
}

export const initialState: InitialStateType = {
    success:false
}

export type ActionType = ReturnType<typeof CreateRequestAC> /*| ReturnType<typeof UpdateRequestAC>*/

export const requestReducer = (state = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "CREATE_REQUEST":
            return {...state, success:action.success}
        // case "UPDATE_REQUEST":
        //     return {...state, success:!action.success}

        default:
            return state
    }
}

export const CreateRequestAC = (success: boolean) => ({type: "CREATE_REQUEST", success}as const)
//export const UpdateRequestAC = (success: boolean) => ({type: "UPDATE_REQUEST", success}as const)


export const CreateRequestTC = (sussess:boolean) => (dispatch:Dispatch<ActionType>) =>{
    console.log('thunk')
    requestAPI.createRequest(sussess).then(response => {
        console.log('response', response.data)
        dispatch(CreateRequestAC(response.data.yourBody.success))
    })
}
// export const UpdateRequestTC = (sussess:boolean) => (dispatch:Dispatch<ActionType>) =>{
//     console.log('Updatethunk')
//     requestAPI.updateRequest(sussess).then(response => {
//         console.log('response', response.data)
//         dispatch(UpdateRequestAC(response.data.yourBody.success))
//     })
// }

