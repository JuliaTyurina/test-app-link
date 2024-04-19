import Styles from './GalleryItem.module.scss'

export const GalleryItem = (props) => {
    const handleClick = () => {
        props.onClick(props.photo)
    }

    return (
        <div className={Styles["gallery__item"]} onClick={handleClick}>
            <img src={props.photo.url} alt={props.photo.alt} />
        </div>
    );
};
