import React from "react";
import css from './Content.module.css';


let newPostCreateElement = React.createRef();

const addPost = () => {
    let text = newPostCreateElement.current.value;
    alert(text)
}



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
                <textarea ref = {newPostCreateElement}></textarea>
                <button onClick={addPost}>add post</button>
            </div>

        </div>
    )

}

export default Post;