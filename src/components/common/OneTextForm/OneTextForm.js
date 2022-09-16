import {useFormik} from "formik";
import * as Yup from "yup";
import s from "./OneTextForm.module.css";
import React from "react";

const OneTextForm = (props) => {

    ///add - function on Submit
    ///placeholder - text to placeholder
    ///maxLength - max length of text
    ///buttonText - text of button
    ///cols = cols of textarea
    ///rows = rows of textarea

   /* const TextArea =({
        field, // { name, value, onChange, onBlur }
        form: {  error }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        ...props
    }) => {
        ///name
        ///errorText
        /// cols
        ///rows
        ///placeholder
        ///value
        ///onChange?

        return (
            <div className={error[field.name]  ? s.error : null}>
                <textarea name={props.name}
                          cols={props.cols} rows={props.rows}
                          placeholder={props.placeholder}
                          value={props.value}
                          onChange={formik.handleChange}
                />
                <div>
                    {props.errorText ? (
                        <span>{props.errorText}</span>
                    ) : null}
                </div>
            </div>
        )
    }*/

    const formik = useFormik({
        initialValues: {text: ''},
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: Yup.object({
            text: Yup.string()
                .required('Required')
                .max(props.maxLength, `Must be ${props.maxLength} characters or less`)
        }),
        onSubmit: values => {
            props.add(values.text)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} onBlur={formik.handleBlur} className={s.add}>
            {/*<Field
                component ={TextArea}
                name={'text'}
                errorText ={formik.errors.text}
                {...props}
                value={formik.values.text}
            />*/}
            <div className={formik.errors.text ? s.error : null}>
                <textarea name={'text'}
                          cols={props.cols} rows={props.rows}
                          placeholder={props.placeholder}
                          value={formik.values.text}
                          onChange={formik.handleChange}
                />
                <div>
                    {formik.errors.text ? (
                        <span>{formik.errors.text}</span>
                    ) : null}
                </div>
            </div>
            <div>
                <button className={s.add} type={"submit"}>{props.buttonText}</button>
            </div>
        </form>
    )
}

export default OneTextForm