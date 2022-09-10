import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ValueThemeType} from "./bll/themeReducer";

const themes = ['some', 'dark', 'red','gradient','rainbow','tablecloth','flower'];

function HW12() {
    //  const them = 'some'; // useSelector
    //  const [value, onChangeOption] = useState(them[1])
    // useDispatch, onChangeCallback
    let theme = useSelector<AppStoreType, ValueThemeType>(state => state.theme.theme)
    const dispatch = useDispatch()
    const onChangeCallback = (value:ValueThemeType) => {
        dispatch(changeThemeAC(value))
    }

    return (

        <div className={s[theme]}>

            <hr/>

            <span className={s[theme + '-text']}>
                homeworks 12
                <div className={s.column}>
                <SuperSelect options={themes}
                             value={theme}
                             onChangeOption={onChangeCallback}/>
                    </div>
            </span>

           {/* should work (должно работать)
            SuperSelect or SuperRadio

            <hr/>*/}
        </div>

    );
}

export default HW12;
