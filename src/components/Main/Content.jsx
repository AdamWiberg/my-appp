import React from "react";
import css from './Content.module.css';



const Main = () => {

    return (
        <div className={css.content}>
            <div>
                <img src='https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg' />
            </div>
            <div className={css.item}>
                Post1
            </div>
            <div className={css.item}>
                Post2
            </div>
            <div className={css.item}>
                Post3
            </div>
            <div className={css.item}>
                <textarea></textarea>
                <button>add post</button>
            </div>

        </div>
    )
}

export default Main;