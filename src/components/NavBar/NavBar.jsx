import React from "react";
import { NavLink } from "react-router-dom";
import css from './NavBar.module.css';


const NavBar = () => {
    return (
       
            <nav className={css.navbar}>
                <div className = {css.item}>
                    Главная
                </div>
                {/* {({ isActive }) => (isActive ? 'active' : 'inactive')}   */}
                <div className={`${css.item} ${css.active}`}>
                    <NavLink to='/content'>Профиль</NavLink>
                </div>
                <div className={css.active}>
                    <NavLink to='/news' >Новости</NavLink>
                </div>
            </nav>
    
    )

}

export default NavBar;