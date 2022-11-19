import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css';
console.log(s)

const NavBar = () => {
    return (
       
            <nav className={s.navbar}>
                <div className = {s.item}>
                    Главная
                </div>
                {/* {({ isActive }) => (isActive ? 'active' : 'inactive')}   */}
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/Content'>Профиль</NavLink>
                </div>
                <div className={s.active}>
                    <NavLink to='/News' >Новости</NavLink>
                </div>
            </nav>
    
    )

}

export default NavBar;