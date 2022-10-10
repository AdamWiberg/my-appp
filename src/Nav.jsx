import React from 'react'
import './Nav.css';


const Nav = () => {
    return (
        <div className = 'menu'>
            <div className='drop-down'>
              <a href='https://ria.ru/'> Риа новости </a>
               <ul>
                <li>
                   <a href='https://ria.ru/politics/'>Политика</a>
                </li>
               </ul>
               <ul>
                <li>
                    <a href="https://ria.ru/world/">В мире</a>
                </li>
               </ul>
               <ul>
                <li>
                    <a href="https://ria.ru/economy/">Экономика</a>
                </li>
               </ul>
               <ul>
                <li>
                    <a href="https://ria.ru/society/">Общество</a>
                </li>
               </ul>
               <ul>
                <li>
                    <a href="https://ria.ru/incidents/">Происшествия</a>
                </li>
               </ul>
           </div>
           <div className='drop-down'>

           </div>
        </div>
    )
}

export default Nav;