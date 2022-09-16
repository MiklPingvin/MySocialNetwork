import s from './Friend.module.css'


const Friend = (props) => {
    return (
            <div className={s.friend}>
                <img
                    className={s.ava_pic}
                    src={props.ava_src}
                    alt=""/>
                {props.name}
            </div>
    );
}


export default Friend