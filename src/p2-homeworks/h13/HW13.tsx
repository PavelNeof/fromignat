import React from 'react'
import sColumn from "../h4/HW4.module.css";
import {Button, Checkbox} from "./Components";




function HW13() {
    return (
        <>
            <hr/>
            homeworks 13
            <div className={sColumn.column}>
                <div>
                    <Request/>
                </div>
            </div>
        </>
    )
}

export default HW13

export const Request = () => {

    return (
        <div>
            <Button/>
            <Checkbox/>
        </div>
    )
}