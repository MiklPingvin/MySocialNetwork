import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import OneTextForm from "../../common/OneTextForm/OneTextForm";


const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map(
        (post) => <Post message={post.message} key={post.id} smallPhoto={props.profilePage.profile.photos.smallPhoto} likeCount={post.likesCount}/>
    ).reverse()

    return (
        <div className={s.posts}>
            <div>
                <h3>My posts</h3>
                <OneTextForm add={props.addPost}
                             placeholder = 'Enter your post text'
                             maxLength = {10}
                             buttonText={'Add Post'}
                             rows={5}
                             cols={30}
                />
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts