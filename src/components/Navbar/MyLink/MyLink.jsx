import s from './Link.module.css'
import {NavLink} from "react-router-dom";

const MyLink = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.to} className={navData => navData.isActive ? s.activeLink : s.item}>{props.name}</NavLink>
        </div>
    )
}

export default MyLink