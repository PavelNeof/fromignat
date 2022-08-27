import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from "../h4/HW4.module.css";

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
        <div className={s.column}>


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

           {/* <hr/>
            для личного творчества, могу проверить
            <AlternativeGreeting/>
            <hr/>*/}
        </div>
        </div>
    )
}

export default HW3
