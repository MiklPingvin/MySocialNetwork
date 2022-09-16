import React from "react";
import {addNewMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withRedirectToLogin from "../Redirect/RedirectToLogin";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {addNewMessage}),
    withRedirectToLogin
)(Dialogs)
