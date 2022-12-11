import React from "react";
import css from './Content.module.css';
import Post from './Post';



  

const Content = (props) => {
    return (
        <div className={css.content}>
            <div>
                <img src='https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg' />
            </div>
            <Post posts ={props.posts} />
        

        </div>
    )
}

export default Content;