import s from './Navbar.module.css'
import MyLink from "./MyLink/MyLink";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <MyLink to="/profile" name='Profile'/>
            <MyLink to='/messages' name='Messages'/>
            <MyLink to='/news' name='News'/>
            <MyLink to='/users' name='Find User'/>
            <MyLink to="/music" name='Music'/>
            <MyLink to="/settings" name='Settings'/>
        </nav>
    )
}

export default Navbar