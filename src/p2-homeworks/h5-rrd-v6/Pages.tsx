import React from 'react'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    MAIN:'/'
    // add paths
}

function Pages() {
    return (
        <div>


            <Routes>

                в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR

                <Route path={PATH.MAIN} element={<div> Choose button: </div>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
