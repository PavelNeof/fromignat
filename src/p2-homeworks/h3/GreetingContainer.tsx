import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    //если имя норм, то вызывает сетНэйм, если плохое, то сетЭррор


    console.log(users)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any

        if(e.currentTarget.value) {
            setName(e.currentTarget.value) // need to fix
            setError('')
        } else {
            setError('Field is required')
        }
    }




    const addUser = () => {
        if(!name){
            setError('Enter your name')
        } else {
            addUserCallback(name)
            setName('')
        }
        alert(`Hello  ${name}!`) // need to fix
        // setTotalUsers(totalUsers+1)
    }

    const totalUsers = users.length // need to fix
    // let [totalUsers, setTotalUsers] = useState(0);

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
