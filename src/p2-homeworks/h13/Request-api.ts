import axios from "axios";



export const requestAPI = {
    createRequest(success: boolean) {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: true})
    },
    // updateRequest(success: boolean) {
    //     return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: false})
    // }
}
