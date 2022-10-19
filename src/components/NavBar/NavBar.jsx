import React from "react";
import './NavBar.css';


const NavBar = () => {
    return (
       
            <nav className='navbar'>
                <div>
                    <a>Главная</a>
                </div>
                <div>
                    <a href='/Content'>Профиль</a>
                </div>
                <div>
                    <a href='/Dialogs'>Сообщения</a>
                </div>
            </nav>
    
    )

}

export default NavBar;