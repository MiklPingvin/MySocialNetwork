import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/imeges/user.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator/Paginator";

let Users = (props) => {
    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} onPageChange={props.onPageChange}
                       currentPage={props.currentPage}
            />
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