import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";

import {CreateRequestTC} from "./requestReducer";
import {AppStoreType} from "../h10/bll/store";


export const Button = () => {

    const dispatch = useDispatch()
    const success = useSelector<AppStoreType, boolean>(state => state.request.success)
    function onClickHandler() {

        dispatch<any>(CreateRequestTC(true))
    }
    // function onClickHandlerOff() {
    //
    //     dispatch<any>(UpdateRequestTC(false))
    // }
    return (
        <div>
            <button onClick={onClickHandler}>click</button>
            {/*<button onClick={onClickHandlerOff}>off</button>*/}
        </div>
    )
}

export const Checkbox = () => {
    const success = useSelector<AppStoreType, boolean>(state => state.request.success)
    console.log('success', success)

    const onClickHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
       /// e===success ? dispatch<any>(CreateRequestTC(false)) : success
    }

    return (
        <div>
            <input type={'checkbox'} onChange={onClickHandler} checked={success}/>
        </div>
    )
}