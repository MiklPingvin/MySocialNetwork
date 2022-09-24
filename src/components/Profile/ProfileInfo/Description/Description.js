import s from "./Description.module.css";
import find from "../../../../assets/imeges/find/find.png";
import no_find from "../../../../assets/imeges/find/no_find.png";
import {useState} from "react";
import Modal from "../../../common/Modal/Modal";
import DescriptionForm from "./DescriptionForm/DescriptionForm";


const Description = ({profile}) => {
    const [formActive, setFormActive] = useState(false)
    return (<div>
        <div>Name : {profile.fullName}</div>
        <div>About Me : {profile.aboutMe}</div>
        <div className={s.work_status}>
            <img src={profile.lookingForAJob ? find : no_find} alt=''/>
            <div className={s.text}>{profile.lookingForAJobDescription}</div>
        </div>
        <button className={s.button} onClick={()=>setFormActive(true)}>Редактировать</button>
        {formActive && <Modal active={formActive} setActive={setFormActive} children={<DescriptionForm profile={profile}/>} />}
        </div>
        )}


export default Description