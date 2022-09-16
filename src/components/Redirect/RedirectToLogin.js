import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

function mapStateToPropsToRedirect(state) {
    return {
        isAuth : state.auth.isAuth
    }
}
const withRedirectToLogin=(Component)=>{
    class RedirectComponent extends React.Component{
        render(){
            if (!this.props.isAuth){
                return <Navigate to={'/login'} />
            }
            return <Component {...this.props}/>;
        }
    }
    return connect(mapStateToPropsToRedirect)(RedirectComponent);
}

export default withRedirectToLogin