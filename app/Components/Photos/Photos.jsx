'use client'

import { Gallery } from "../Gallery/Gallery"
import Styles from './Photos.module.scss'
import { useState } from "react"
import { Overlay } from "../Overlay/Overlay"
import { Popup } from "../Popup/Popup"

export const Photos = (props) => {
    const [visiblePhotos, setVisiblePhotos] = useState(7)
    const [popupIsOpened, setPopupIsOpened] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const handleShowMore = () => {
        setVisiblePhotos(prev => prev + 7)
    }

    const openPhoto = (photo) => {
        setSelectedPhoto(photo)
        setPopupIsOpened(true)
    }

    const closePopup = () => {
        setPopupIsOpened(false)
    }

    return <section className={Styles["photos"]}>
        <div className={Styles["photos__content"]}>
            <h3 id="photos_anchor" className={Styles["photos__title"]}>
                Галерея
            </h3>
            <p className={Styles["photos__descr"]}>
                Мы&nbsp;уделяем особое внимание эргономике и&nbsp;стараемся соответствовать месту работы
            </p>
        </div>
        <Gallery data={props.data.slice(0, visiblePhotos)} onClick={openPhoto} />
        {props.data.length > visiblePhotos && (<button onClick={handleShowMore} className={Styles["show-more"]}>Смотреть еще</button>)}
        <Overlay close={closePopup} isModalOpened={popupIsOpened} />
        <Popup close={closePopup} isModalOpened={popupIsOpened}>
            {selectedPhoto && (
                <img src={selectedPhoto.url} alt={selectedPhoto.alt} />
            )}
        </Popup>
    </section>
}