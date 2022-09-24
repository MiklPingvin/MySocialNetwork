import {Formik} from "formik";
import * as Yup from "yup";
import s from './DescriptionForm.module.css'
import {connect} from "react-redux";
import {updateUserProfile} from "../../../../../redux/profile-reducer";
import React from "react";


const DescriptionForm = ({profile,updateUserProfile,setFormActive}) => {
    return (
        <Formik
            initialValues={{
                fullName: profile.fullName ,
                aboutMe: profile.aboutMe ? profile.aboutMe: 'no aboutMe',
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJob ?profile.lookingForAJobDescription:'no description',
                contacts: profile.contacts,
                photos: profile.photos
            }}
            validationSchema={Yup.object({
                fullName: Yup.string()
                    .required('Required'),
                aboutMe: Yup.string()
                    .required('Required'),
            })}
            onSubmit={(values) => {
                updateUserProfile(values)
                setFormActive(false)
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
                    <div className={s.item} >Name : <input name='fullName' className={s.input} type="text" value={formik.values.fullName}/></div>
                    {formik.errors.fullName ? (
                        <span className={s.error} >{formik.errors.fullName}</span>
                    ) : null}
                    <div className={s.item}>aboutMe : <input name='aboutMe' className={s.input} type="text" placeholder={formik.values.aboutMe} value={formik.values.aboutMe}/></div>
                    {formik.errors.aboutMe ? (<span className={s.error}>{formik.errors.aboutMe}</span>) : null}
                    <div className={s.item}>lookingForAJob : <input name='lookingForAJob'  type="checkbox" className={s.input+' '+s.check} value={formik.values.lookingForAJob}/></div>
                    {formik.values.lookingForAJob?<div className={s.item} >Skills : <input type="text" className={s.input} name='lookingForAJobDescription' value={formik.values.lookingForAJobDescription}/></div>:null}
                    <button type={"submit"} className={s.button}>Сохранить</button>
                </form>
            )
            }


        </Formik>
    )

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps,{updateUserProfile})(DescriptionForm)
