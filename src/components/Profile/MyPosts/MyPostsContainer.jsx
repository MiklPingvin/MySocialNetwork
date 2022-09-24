import React from "react";
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}


const MyPostsContainer= compose(
    connect(mapStateToProps, {addPost}),
    //React.memo
)(MyPosts)

//const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer