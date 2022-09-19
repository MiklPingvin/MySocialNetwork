import React from "react";
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
            status: this.props.status
        })
    }
    deactivateEditModeWithSave = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !==this.props.status){
        this.setState({status:this.props.status})}
    }

    render() {
        return (<div>
            {this.state.editMode ?
                <div className={s.editGroup}>
                    <input value={this.state.status}
                           autoFocus={true}
                           size={30}
                           onChange={this.onStatusChange}
                    />
                    <div className={s.buttons}>
                        <button onClick={() => {
                            this.deactivateEditModeWithSave()
                        }}>
                            Сохранить
                        </button>
                        <button onClick={() => {
                            this.deactivateEditMode()
                        }}>
                            Галя, у нас отмена!
                        </button>
                    </div>
                </div> :
                    <span onDoubleClick={() => {
                        this.activateEditMode()
                    }}>{this.props.status || 'No status'}</span>
            }
        </div>)
    }
}

export default ProfileStatus

