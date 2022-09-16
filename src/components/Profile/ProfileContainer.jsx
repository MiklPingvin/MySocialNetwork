import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
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
    componentDidMount() {
        let userID = this.props.router.params.userID
        if (!userID) {
            userID = this.props.authorizeUserID;
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
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
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer)