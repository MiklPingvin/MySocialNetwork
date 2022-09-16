import React from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";
import s from "./Login.module.css";
import {login, loginOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {LoginForm} from "./login-form";


const Login = ({isAuth, login}) => {

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div className={s.all}>
        <h1>Login</h1>
        <LoginForm login={login}/>
    </div>
}
export default connect((state) => {
    return {isAuth: state.auth.isAuth}
}, {login, loginOut})(Login)