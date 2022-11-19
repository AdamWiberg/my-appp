import React from "react";
import s from './main.module.css';


const main = () => {
    return (
        
            <main className={s.content}>
                <div>
                    <img src='https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg' />
                </div>
                <div className={s.item}>
                    Post1
                </div>
                <div className={s.item}>
                    Post2
                </div>
                <div className={s.item}>
                    Post3
                </div>
                <div className={s.item}>
                    <input /> 
                    <button>add post</button>
                </div>

            </main>
    )
}

export default main;