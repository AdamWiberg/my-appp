import React from "react";
import s from './post.module.css';


const Post = (props) => {
   
   
    let post = [
        {id: 1, message: 'Post1'},
        {id: 2, message: 'Post2'},
        {id: 3, message: 'Post3'},
    ]

    let postElements = post.map(p => post.message={p.message} />);
   
    return (
            <div className={s.content}>
                <div>
                    <img src='https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg' />
                </div>
                {/* <div className={s.item}>
                    Post1
                </div>
                <div className={s.item}>
                    Post2
                </div>
                <div className={s.item}>
                    Post3
                </div> */}
                <div className={s.post}>
                {postElements}
                    <textarea></textarea>
                    <button>add post</button>
                </div>

            </div>
    )
}

export default Post;