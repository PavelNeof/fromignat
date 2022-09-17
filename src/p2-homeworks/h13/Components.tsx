import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";

import {CreateRequestTC} from "./requestReducer";
import {AppStoreType} from "../h10/bll/store";
import s from './HW13.module.css'


export const Button = () => {

    const dispatch = useDispatch()

    function onClickHandler() {
        dispatch<any>(CreateRequestTC(true))
    }
    // function onClickHandlerOff() {
    //
    //     dispatch<any>(UpdateRequestTC(false))
    // }
    return (
        <div>
            <button onClick={onClickHandler} className={s.button}>click</button>
            {/*<button onClick={onClickHandlerOff}>off</button>*/}
        </div>
    )
}

export const Checkbox = () => {
    const success = useSelector<AppStoreType, boolean>(state => state.request.success)
    //console.log('success', success)

    const plug = (e:ChangeEvent<HTMLInputElement>) => {
    }

    return (
        <div className={s.centre}>
            <label className={s.checkboxStyleD}>
                <input type={'checkbox'} onChange={plug} checked={success} className={s.checkbox}/>
                <div className={s.checkboxCheckmark}></div>
                <div className={s.checkboxBody}>Style D</div>
            </label>

        </div>
    )
}