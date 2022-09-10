import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "../h4/HW4.module.css";


export type initialPeopleType = Array<UserType>
export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]


function HW8() {
    const [people, setPeople] = useState<initialPeopleType>(initialPeople) // need to fix any


    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            <span>{p.name}</span>
            <span> </span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))
    return (
        <div>

            <hr/>
            homeworks 8 reducer
            <div className={s.column}>
                <div className={s.tab}>
                    {finalPeople}
                </div>
                <div><SuperButton onClick={sortUp}>sortUp</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sortDown</SuperButton></div>
                <div><SuperButton onClick={check}>check18</SuperButton></div>


                {/*<hr/>
                для личного творчества, могу проверить
                <AlternativePeople/>
                <hr/>*/}
            </div>
        </div>
    )
}

export default HW8
