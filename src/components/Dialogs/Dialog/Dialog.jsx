import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialog} >
            <img
                className={s.ava_pic}
                src="https://coolsen.ru/wp-content/uploads/2021/06/138-8-1018x1024.jpg"
                alt=""/>
            <NavLink className={s.name} to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog