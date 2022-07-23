import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>

            <NavLink to={'/'} className={s.button5}>main</NavLink>

            <NavLink to={'/pre-junior'} className={s.button5}>pre-junior</NavLink>

            <NavLink to={'/junior'} className={s.button5}>junior</NavLink>

            <NavLink to={'/junior-plus'} className={s.button5}>junior-plus</NavLink>
        </div>
    )
}

export default Header
