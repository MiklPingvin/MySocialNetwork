import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus} from "../../redux/profile-reducer";
import {useLocation, useParams, useNavigate} from "react-router-dom";
import withRedirectToLogin from "../Redirect/RedirectToLogin";
import {compose} from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userID = this.props.router.params.userID
        if (!userID) {
            userID = this.props.authorizeUserID;
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userID !== prevProps.router.params.userID) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.router.params.userID}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizeUserID: state.auth.data.id,
    isAuth: state.auth.isAuth
})

export default compose(
    withRedirectToLogin,
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus,savePhoto}),
    withRouter
)(ProfileContainer)