import s from './Message.module.css'

const Message = (props) => {
    return (
            <div className={props.is_my?s.isMy:s.message}>{props.message}</div>
    )
}

export default Message