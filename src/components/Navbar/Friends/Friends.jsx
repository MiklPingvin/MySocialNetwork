import s from './Friends.module.css'
import Friend from "./Friend/Friend";


const Friends = (props) => {
    let my_friends = props.sideBar.friends.map(
        (friend) => <Friend name ={friend.name} key={friend.id} ava_src={friend.ava_src}/>
    )

    return (
        <div>
            <div className={s.item}>
                Friends
            </div>
            {my_friends}
        </div>
    );
}


export default Friends