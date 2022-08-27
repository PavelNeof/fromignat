import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "../h4/HW4.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";
import Leo from './gif/Leo.gif'

function HW10() {

    let loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()
    console.log(loading)

    const setLoading = () => {
        // dispatch делает лоадинг тру
        // setTimeout делает лоадинг фолс
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div className={s.column}>
            <hr/>
            homeworks 10
            <div className={s.tab}>


            {/*should work (должно работать)*/}
            {loading ? (
                <>
                    <img src={Leo} className={s.HW10}/>
                </>


            ) : (
                <div className={s.HW10button}>
                    <SuperButton onClick={setLoading} >set loading...</SuperButton>
                </div>
            )
            }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
