import React, {useEffect, useState} from "react";
import s from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(`${props.status}`)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])


    return (<div>
        {editMode ?
            <div className={s.editGroup}>
                <input value={status}
                       autoFocus={true}
                       size={30}
                       onChange={(e) => {
                           setStatus(e.currentTarget.value)
                       }}
                />
                <div className={s.buttons}>
                    <button
                        onClick={() => {
                            setEditMode(false);
                            props.updateUserStatus(status)
                        }
                        }
                    >
                        Сохранить
                    </button>
                    <button
                        onClick={() => {
                            setEditMode(false)
                            setStatus(props.status)
                        }}
                    >
                        Галя, у нас отмена!
                    </button>
                </div>
            </div> :
            <div>
                    <span
                        onDoubleClick={() => {
                            setEditMode(true)
                        }}
                    >{props.status || 'No status'}</span>

            </div>
        }
        <div></div>
    </div>)
}

export default ProfileStatusWithHooks

