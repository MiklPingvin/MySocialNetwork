import {useFormik} from "formik";
import * as Yup from "yup";
import s from "./Login.module.css";
import React from "react";

export const LoginForm = ({login, captchaUrl}) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: true,
            captcha: null
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required')
                .max(20, `Must be 15 characters or less`),
            password: Yup.string()
                .required('Required')
                .max(15, `Must be 15 characters or less`),
        }),
        onSubmit: (values, {setSubmitting, setStatus}) => {
            login(values.email, values.password, values.rememberMe, values.captcha, setStatus)
            setSubmitting(false)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} className={s.add}>
            <div className={formik.errors.email ? s.error : null}>
                <input type="text" placeholder={'Email'}
                       name={'email'}
                       value={formik.values.email}
                       onChange={formik.handleChange}
                />
                <div>
                    {formik.errors.email ? (
                        <span className={s.errorMessage}>{formik.errors.email}</span>
                    ) : null}
                </div>
            </div>
            <div className={formik.errors.password ? s.error : null}>
                <input type="text" placeholder={'Password'}
                       name={'password'}
                       value={formik.values.password}
                       onChange={formik.handleChange}/>
                <div>
                    {formik.errors.password ? (
                        <span className={s.errorMessage}>{formik.errors.password}</span>
                    ) : null}
                </div>
            </div>
            <div>
                <input name={'rememberMe'}
                       type={'checkbox'}
                       checked={formik.values.rememberMe}
                       onChange={formik.handleChange}/>Remember me
            </div>
            {captchaUrl && <img src={captchaUrl} alt=""/>}
            {captchaUrl && <div><input name={'captcha'} type="text" onChange={formik.handleChange}  placeholder='Symbols for picture'/></div>}
            <div>
                <button className={s.add} type={"submit"} disabled={formik.isSubmitting}>Login</button>
                {formik.status && <div className={s.errorMessage}>{formik.status}</div>}
            </div>
        </form>)
}