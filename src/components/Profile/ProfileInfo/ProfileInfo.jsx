import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import find from '../../../assets/imeges/find/find.png'
import no_find from '../../../assets/imeges/find/no_find.png'
import userPhoto from '../../../assets/imeges/user.jpg'
import facebook from '../../../assets/imeges/icon/facebook.png'
import youtube from '../../../assets/imeges/icon/youtube.png'
import vk from '../../../assets/imeges/icon/vk.png'
import twitter from '../../../assets/imeges/icon/twitter.png'
import mail from '../../../assets/imeges/icon/mail.png'
import instagram from '../../../assets/imeges/icon/instagram.png'
import github from '../../../assets/imeges/icon/github.png'
import website from '../../../assets/imeges/icon/website.png'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHOOKs";

const ContactLinc = (props) => {
    if (!props.link) {
        return '';
    } else {
        return (
            <a href={props.link}><img src={props.image} alt=""/></a>
        )
    }
}


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let linkMap = [
        {id: 1, image: facebook, link: props.profile.contacts.facebook},
        {id: 2, image: website, link: props.profile.contacts.website},
        {id: 3, image: youtube, link: props.profile.contacts.youtube},
        {id: 4, image: vk, link: props.profile.contacts.vk},
        {id: 5, image: mail, link: props.profile.contacts.mail},
        {id: 6, image: twitter, link: props.profile.contacts.twitter},
        {id: 7, image: instagram, link: props.profile.contacts.instagram},
        {id: 8, image: github, link: props.profile.contacts.github}
    ].map((link) =>
        <ContactLinc image={link.image} key={link.id} link={link.link}/>
    )

    return (
        <div>
            <div className={s.description}>
                <img
                    className={s.ava_pic}
                    src={props.profile.photos.small != null ? props.profile.photos.large : userPhoto}
                    alt=""/>
                <div>
                    <div>Name : {props.profile.fullName}</div>
                    <div className={s.status}>Status :  <ProfileStatusWithHooks
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                    /></div>
                    <div>About me : {props.profile.aboutMe}</div>

                    <div className={s.work_status}>
                        <img src={props.profile.lookingForAJob ? find : no_find} alt=''/>
                        <div className={s.text}>{props.profile.lookingForAJobDescription}</div>
                    </div>
                </div>

            </div>
            <div className={s.contacts}>
                <h3>Contacts</h3>
                {linkMap}
            </div>
        </div>
    )
}

export default ProfileInfo