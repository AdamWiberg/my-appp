import React from "react";
import css from './Content.module.css';

const PostElements = (props) => {
    return (
        <div className={css.item}>
            <span>{props.name} </span>
        </div>
    )
}



const Post = (props) => {
    let PostsElement =
        props.posts.map(m => <PostElements name={m.message} key={m.id} />)

    return (
        <div>
            <div className={css.item}>
                {PostsElement}
                <textarea></textarea>
                <button>add post</button>
            </div>

        </div>
    )

}

export default Post;