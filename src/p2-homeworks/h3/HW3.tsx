import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string// need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([
        // {_id:v1(),name: '' }
    ]) // need to fix any


    const addUserCallback = (name: string) => { // need to fix any
        let newUser = {_id:v1(),name: name }
        setUsers([newUser, ...users]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {users.map((el)=>{
                return(
                    <li key={el._id}>
                        <span> {el.name} </span>
                    </li>
                )
            }

            )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
