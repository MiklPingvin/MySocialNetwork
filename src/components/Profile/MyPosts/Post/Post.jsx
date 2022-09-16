import s from './Post.module.css'
import React from "react";
import userPhoto from "../../../../assets/imeges/user.jpg";

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.noLike}>
                <img
                    className={s.ava_pic}
                    src={props.smallPhoto != null ? props.smallPhoto : userPhoto}
                    alt=""/>
                {props.message}
            </div>
            <div>
                <span>Like</span>
                {props.likeCount}
            </div>
        </div>
    )
}

export default Post