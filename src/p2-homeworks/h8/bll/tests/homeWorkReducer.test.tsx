import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {initialPeopleType} from "../../HW8";

let initialState: initialPeopleType

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

export type ChangeTodoListTitleAT = {
    type: 'sort' | 'check'
    payload: string | number
}

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    console.log(newState)
    expect(newState[0].name).toBe('Кот')
    expect(newState[5].age).toBe(66)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    expect(newState[0].name).toBe('Александр')
    expect(newState[5].age).toBe(3)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    console.log(newState)
    expect(newState.length).toBe(4)

})
