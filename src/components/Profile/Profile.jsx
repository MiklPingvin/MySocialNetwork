import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile = {props.profile}
                         status = {props.status}
                         updateUserStatus={props.updateUserStatus}
            />
            {props.profile && props.isOwner? <MyPostsContainer /> : null}
        </div>
    )
}
export default Profile