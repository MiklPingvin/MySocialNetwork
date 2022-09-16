import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";
import OneTextForm from "../common/OneTextForm/OneTextForm";

const Dialogs = (props) => {

    let dialogsElements = [
        props.dialogsPage.dialogs.map(
            (dialog) => <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>)
    ]

    let messagesElements = props.dialogsPage.messages.map(
        (m) => <Message is_my={m.is_my} key={m.id} message={m.message}/>
    )

    if (!props.isAuth){
        return <Navigate to={'/login'} />
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <OneTextForm add={props.addNewMessage}
                placeholder ='Enter massage'
                maxLength={50}
                buttonText ={"Add"}
                cols = {40}
                rows ={3}
            />
        </div>)
}


export default Dialogs