import Styles from './ReviewCard.module.scss'
import { useResize } from '@/app/hooks/useResize'

export const ReviewCard = (props) => {
    const { isScreenMd } = useResize()

    const handleClick = () => {
        props.onClick(props.user)
    }
    return <div className={Styles["review__card"]}>
        <div className={Styles["user"]}>
            <img className={Styles["user__avatar"]} src={props.user.avatar} alt={props.user.name} />
            <div className={Styles["user__info"]}>
                <h4 className={Styles["user__name"]}>{`${props.user.name} ${props.user.surname}`}</h4>
                <p className={Styles["user__occupation"]}>{props.user.occupation}</p>
            </div>
        </div>
        {props.showFullComment && props.isModalOpened ?
            (<div className={Styles["user__comment"]}>
                <p className={Styles["user__comment-text"]}>{props.user.comment}</p>
            </div>)
            :
            (<div className={Styles["user__comment"]}>
                <p className={Styles["user__comment-text"]}> {isScreenMd ? (props.user.comment.slice(0, 184)) : (props.user.comment.slice(0, 228))}...</p>
                <button className={Styles["user__comment-btn"]} onClick={handleClick}>Показать еще</button>
            </div>)}
    </div>
}