import s from './Header.module.css'
import { NavLink} from "react-router-dom";
import userPhoto from "../../assets/imeges/user.jpg";
import React from "react";

const Header = (props) => {
        return (
            <header className={s.header}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png"
                    alt=""/>
                <div className={s.loginBlock}>
                    {props.isAuth ?
                        <div className={s.withLogin}>
                            <img
                                className={s.ava_pic}
                                src={props.smallPhoto != null ? props.smallPhoto : userPhoto}
                                alt=""/>
                            <span  className={s.login}>{props.login}</span>
                            <button  className={s.onNameClick} onClick={props.loginOut}>Log Out</button>
                        </div> :
                        <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        )
}

export default Header