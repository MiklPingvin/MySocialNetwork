import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {loginOut} from "../../redux/auth-reducer";
import userPhoto from '../../assets/imeges/user.jpg'

class HeaderContainer extends React.Component {


    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login,
    smallPhoto: state.auth.isAuth?state.profilePage.profile.photos.small: userPhoto
})

export default connect(mapStateToProps, {
    loginOut
})(HeaderContainer)