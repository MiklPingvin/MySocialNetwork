import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/imeges/user.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return (
        <div>
            <div>
                {slicedPages.map(p => {
                    return <span onClick={() => {
                        props.onPageChange(p)
                    }} className={p === props.currentPage ? s.selectedPageNumber : s.pageNumber} key={p}>{p}</span>
                })}
            </div>
            <div className={s.users}>
                {
                    props.users.map(u => <div key={u.id} className={s.userCard}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                                         className={s.userPhoto}/></NavLink>
                            </div>
                        </div>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <div>
                            {u.followed ?
                                <button
                                    className={s.followButton}
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.userFollowing(u.id, false)
                                    }}>Unfollow</button> :
                                <button className={s.followButton}
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.userFollowing(u.id, true)
                                        }}>Follow</button>}
                        </div>
                    </span>
                    </div>)
                }
            </div>
        </div>)
}
export default Users