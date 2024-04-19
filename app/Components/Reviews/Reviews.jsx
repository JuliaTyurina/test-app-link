'use client'

import { useState } from 'react'
import { Popup } from '../Popup/Popup'
import { ReviewCard } from '../ReviewCard/ReviewCard'
import Styles from './Reviews.module.scss'
import { Overlay } from '../Overlay/Overlay'
import { useResize } from '@/app/hooks/useResize'


export const Reviews = (props) => {
    const [selectedReview, setSelectedReview] = useState(null)
    const [popupIsOpened, setPopupIsOpened] = useState(false)
    const [showFullComment, setShowFullComment] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const { isScreenXl } = useResize()

    const reviewsPerPage = isScreenXl ? 1 : 3
    const indexOfLastReview = currentPage * reviewsPerPage
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage
    const currentReviews = props.data.slice(indexOfFirstReview, indexOfLastReview)

    const openReview = (review) => {
        setSelectedReview(review)
        setPopupIsOpened(true)
        setShowFullComment(true)
    }

    const closePopup = () => {
        setPopupIsOpened(false)
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    return (
        <section id='reviews' className={Styles["reviews"]}>
            <h3 id="reviews_anchor" className={Styles["reviews__title"]}>Отзывы</h3>
            <div className={Styles["reviews__cards"]}>
                {currentReviews.map((user, index) => (
                    <ReviewCard key={index} user={user} onClick={openReview} />
                ))}
            </div>
            <Overlay close={closePopup} isModalOpened={popupIsOpened} />
            {selectedReview && (
                <Popup close={closePopup} isModalOpened={popupIsOpened} showFullComment={showFullComment}>
                    <ReviewCard user={selectedReview} isModalOpened={popupIsOpened} showFullComment={showFullComment} />
                </Popup>
            )}
            <div className={Styles["reviews__switcher"]}>
                <button className={Styles["reviews__prev"]} onClick={prevPage} disabled={currentPage === 1}>
                    <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                        <defs>
                            <clipPath id="clip710_4118">
                                <rect id="arrow-left" width="24.000000" height="24.000000" fill="white" />
                            </clipPath>
                        </defs>
                        <g>
                            <path id="Union" d="M12.6364 6.63637C12.9878 6.2849 12.9878 5.71505 12.6364 5.36358C12.2849 5.01211 11.7151 5.01211 11.3636 5.36358L5.36358 11.3636C5.01211 11.715 5.01211 12.2849 5.36358 12.6364L11.3636 18.6364C11.7151 18.9878 12.2849 18.9878 12.6364 18.6364C12.9878 18.2849 12.9878 17.715 12.6364 17.3636L8.17277 12.9L18 12.9C18.497 12.9 18.9 12.497 18.9 12C18.9 11.5029 18.497 11.1 18 11.1L8.17277 11.1L12.6364 6.63637Z" fill="#fff" />
                        </g>
                    </svg>
                </button>
                <span className={Styles["reviews__count"]}>{currentPage} / {Math.ceil(props.data.length / reviewsPerPage)}</span>
                <button className={Styles["reviews__next"]} onClick={nextPage} disabled={indexOfLastReview >= props.data.length}>
                    <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" >
                        <defs>
                            <clipPath id="clip710_4121">
                                <rect id="arrow-right" width="24.000000" height="24.000000" fill="white" />
                            </clipPath>
                        </defs>
                        <g>
                            <path id="Union" d="M12.6364 5.36358C12.2849 5.01211 11.7151 5.01211 11.3636 5.36358C11.0121 5.71505 11.0121 6.2849 11.3636 6.63637L15.8272 11.1L5.99998 11.1C5.50292 11.1 5.09998 11.5029 5.09998 12C5.09998 12.497 5.50292 12.9 5.99998 12.9L15.8272 12.9L11.3636 17.3636C11.0121 17.715 11.0121 18.2849 11.3636 18.6364C11.7151 18.9878 12.2849 18.9878 12.6364 18.6364L18.6364 12.6364C18.9878 12.2849 18.9878 11.715 18.6364 11.3636L12.6364 5.36358Z" fill="#fff" />
                        </g>
                    </svg>

                </button>
            </div>
        </section>
    )
}