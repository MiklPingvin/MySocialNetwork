import s from "./AvatarPhoto.module.css";
import userPhoto from "../../../../assets/imeges/user.jpg";
import plus from "../../../../assets/plyus.png";



const AvatarPhoto =({largePhoto,isOwner,savePhoto})=>{

    const onPhotoSelected = (e) => {
        if (e.target.files[0]) (savePhoto(e.target.files[0]))
    }

    return(<div>
        <img
            className={s.ava_pic}
            src={largePhoto != null ? largePhoto : userPhoto}
            alt=""
        />
        {isOwner && <div
        >
            <label htmlFor="input"
                   className={s.input}
                   onMouseOver={event => event.target.classList.remove(s.out)}
                   onMouseOut={event => event.target.classList.add(s.out)}
            >
                <img src={plus} className={s.ava_pic +" "+ s.input} alt=""/>
            </label>
            <input type="file" className={s.out} onChange={onPhotoSelected} id={"input"}/>
        </div>}
    </div>)
}

export default AvatarPhoto