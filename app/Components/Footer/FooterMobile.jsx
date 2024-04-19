'use client'

import { useState } from 'react';
import { SocialList } from '../SocialList/SocialList';
import Styles from './Footer.module.scss'
import { Link } from 'react-scroll';

export const FooterMobile = () => {
    const [activeIndex, setActiveIndex] = useState(1)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return <footer className={Styles["footer"]}>

        <div className={Styles["footer__top"]}>
            <ul className={Styles["accordion"]}>
                <li className={Styles["accordion__item"]}>
                    <button onClick={() => toggleAccordion(1)} className={`${Styles["footer__navigation-title"]} ${Styles["accordion__title"]}`}>Link
                        {activeIndex === 1 ? (<svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                            <defs>
                                <clipPath id="clip750_1154">
                                    <rect id="chevron-up" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#clip750_1154)">
                                <path id="Union" d="M12.6364 8.36355C12.2849 8.01208 11.7151 8.01208 11.3636 8.36355L5.36359 14.3636C5.01212 14.715 5.01212 15.2849 5.36359 15.6363C5.71506 15.9878 6.28491 15.9878 6.63638 15.6363L12 10.2727L17.3636 15.6363C17.7151 15.9878 18.2849 15.9878 18.6364 15.6363C18.9879 15.2849 18.9879 14.715 18.6364 14.3636L12.6364 8.36355Z" clipRule="evenodd" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                            </g>
                        </svg>) :
                            (<svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                                <defs>
                                    <clipPath id="clip750_1157">
                                        <rect id="chevron-down" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#clip750_1157)">
                                    <path id="Union" d="M6.63638 8.36358C6.28491 8.01211 5.71506 8.01211 5.36359 8.36358C5.01212 8.71505 5.01212 9.2849 5.36359 9.63637L11.3636 15.6364C11.7151 15.9878 12.2849 15.9878 12.6364 15.6364L18.6364 9.63637C18.9879 9.2849 18.9879 8.71505 18.6364 8.36358C18.2849 8.01211 17.7151 8.01211 17.3636 8.36358L12 13.7272L6.63638 8.36358Z" clipRule="evenodd" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                                </g>
                            </svg>
                            )}


                    </button>
                    <div className={`${activeIndex === 1 ? Styles["accordion__open"] : ''} ${Styles["accordion__collapse"]}`}>
                        <ul className={Styles["accordion__body"]}>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Преимущества</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Продукт</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Галерея</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Партнеры</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Отзывы</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Заявка</a></li>
                        </ul>
                    </div>
                </li>
                <li className={Styles["accordion__item"]}>
                    <button onClick={() => toggleAccordion(2)} className={`${Styles["footer__navigation-title"]} ${Styles["accordion__title"]}`}>Миссия
                        {activeIndex === 2 ? (<svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                            <defs>
                                <clipPath id="clip750_1154">
                                    <rect id="chevron-up" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#clip750_1154)">
                                <path id="Union" d="M12.6364 8.36355C12.2849 8.01208 11.7151 8.01208 11.3636 8.36355L5.36359 14.3636C5.01212 14.715 5.01212 15.2849 5.36359 15.6363C5.71506 15.9878 6.28491 15.9878 6.63638 15.6363L12 10.2727L17.3636 15.6363C17.7151 15.9878 18.2849 15.9878 18.6364 15.6363C18.9879 15.2849 18.9879 14.715 18.6364 14.3636L12.6364 8.36355Z" clipRule="evenodd" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                            </g>
                        </svg>) :
                            (<svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                                <defs>
                                    <clipPath id="clip750_1157">
                                        <rect id="chevron-down" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#clip750_1157)">
                                    <path id="Union" d="M6.63638 8.36358C6.28491 8.01211 5.71506 8.01211 5.36359 8.36358C5.01212 8.71505 5.01212 9.2849 5.36359 9.63637L11.3636 15.6364C11.7151 15.9878 12.2849 15.9878 12.6364 15.6364L18.6364 9.63637C18.9879 9.2849 18.9879 8.71505 18.6364 8.36358C18.2849 8.01211 17.7151 8.01211 17.3636 8.36358L12 13.7272L6.63638 8.36358Z" clipRule="evenodd" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                                </g>
                            </svg>
                            )}
                    </button>
                    <div className={`${Styles["accordion__collapse"]} ${activeIndex === 2 ? Styles["accordion__open"] : ''}`}>
                        <ul className={Styles["accordion__body"]}>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Повествование</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Роадмеп</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Релизы</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Календарь</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Сторибук</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Художка</a></li>
                        </ul>
                    </div>
                </li>
                <li className={Styles["accordion__item"]}>
                    <button onClick={() => toggleAccordion(3)} className={`${Styles["footer__navigation-title"]} ${Styles["accordion__title"]}`}>Ресурсы
                        {activeIndex === 3 ? (<svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                            <defs>
                                <clipPath id="clip750_1154">
                                    <rect id="chevron-up" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#clip750_1154)">
                                <path id="Union" d="M12.6364 8.36355C12.2849 8.01208 11.7151 8.01208 11.3636 8.36355L5.36359 14.3636C5.01212 14.715 5.01212 15.2849 5.36359 15.6363C5.71506 15.9878 6.28491 15.9878 6.63638 15.6363L12 10.2727L17.3636 15.6363C17.7151 15.9878 18.2849 15.9878 18.6364 15.6363C18.9879 15.2849 18.9879 14.715 18.6364 14.3636L12.6364 8.36355Z" clipRule="evenodd" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                            </g>
                        </svg>) :
                            (<svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                                <defs>
                                    <clipPath id="clip750_1157">
                                        <rect id="chevron-down" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#clip750_1157)">
                                    <path id="Union" d="M6.63638 8.36358C6.28491 8.01211 5.71506 8.01211 5.36359 8.36358C5.01212 8.71505 5.01212 9.2849 5.36359 9.63637L11.3636 15.6364C11.7151 15.9878 12.2849 15.9878 12.6364 15.6364L18.6364 9.63637C18.9879 9.2849 18.9879 8.71505 18.6364 8.36358C18.2849 8.01211 17.7151 8.01211 17.3636 8.36358L12 13.7272L6.63638 8.36358Z" clipRule="evenodd" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                                </g>
                            </svg>
                            )}
                    </button>
                    <div className={`${activeIndex === 3 ? Styles["accordion__open"] : ''} ${Styles["accordion__collapse"]}`}>
                        <ul className={Styles["accordion__body"]}>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Для инвесторов</a>
                            </li>
                            <li className={Styles["accordion__body-item"]}>
                                <a href="" className={Styles["footer__navigation-link"]}>Вайтлист</a>
                                <a href="" className={`${Styles["footer__navigation-link"]} ${Styles["footer__link-special"]}`}>Файлы</a>
                            </li>
                            <li className={Styles["accordion__body-item"]}>
                                <a href="" className={Styles["footer__navigation-link"]}>Прайслист</a>
                                <a href="" className={`${Styles["footer__navigation-link"]} ${Styles["footer__link-special"]}`}>Файлы</a>
                            </li>
                            <li className={Styles["accordion__body-item"]}>
                                <a href="" className={Styles["footer__navigation-link"]}>Презентация</a>
                            </li>
                            <li className={Styles["accordion__body-item"]}>
                                <a href="" className={`${Styles["footer__navigation-link"]} ${Styles["footer__link-special"]}`}>Файлы</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={Styles["accordion__item"]}>
                    <button onClick={() => toggleAccordion(4)} className={`${Styles["footer__navigation-title"]} ${Styles["accordion__title"]}`}>О нас
                        {activeIndex === 4 ? (<svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                            <defs>
                                <clipPath id="clip750_1154">
                                    <rect id="chevron-up" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#clip750_1154)">
                                <path id="Union" d="M12.6364 8.36355C12.2849 8.01208 11.7151 8.01208 11.3636 8.36355L5.36359 14.3636C5.01212 14.715 5.01212 15.2849 5.36359 15.6363C5.71506 15.9878 6.28491 15.9878 6.63638 15.6363L12 10.2727L17.3636 15.6363C17.7151 15.9878 18.2849 15.9878 18.6364 15.6363C18.9879 15.2849 18.9879 14.715 18.6364 14.3636L12.6364 8.36355Z" clipRule="evenodd" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                            </g>
                        </svg>) :
                            (<svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                                <defs>
                                    <clipPath id="clip750_1157">
                                        <rect id="chevron-down" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#clip750_1157)">
                                    <path id="Union" d="M6.63638 8.36358C6.28491 8.01211 5.71506 8.01211 5.36359 8.36358C5.01212 8.71505 5.01212 9.2849 5.36359 9.63637L11.3636 15.6364C11.7151 15.9878 12.2849 15.9878 12.6364 15.6364L18.6364 9.63637C18.9879 9.2849 18.9879 8.71505 18.6364 8.36358C18.2849 8.01211 17.7151 8.01211 17.3636 8.36358L12 13.7272L6.63638 8.36358Z" clipRule="evenodd" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                                </g>
                            </svg>
                            )}
                    </button>
                    <div className={`${activeIndex === 4 ? Styles["accordion__open"] : ''} ${Styles["accordion__collapse"]}`}>
                        <ul className={Styles["accordion__body"]}>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>История компании</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Об основателе</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Наша команда</a></li>
                            <li className={Styles["accordion__body-item"]}><a href="" className={Styles["footer__navigation-link"]}>Вакансии</a></li>
                        </ul>
                    </div>
                </li>
            </ul>

            <address className={Styles["footer__address"]}>
                <a className={Styles["footer__address-contact"]} target='_blank' href="https://yandex.ru/maps/213/moscow/geo/ulitsa_grachyovka/1743117481/?ll=37.492841%2C55.868109&source=serp_navig&z=17.75">г. Москва, ул Пушкина, д. Колотушкина 37, каб. 142, дверь справа</a>
                <a className={Styles["footer__address-contact"]} href="tel:+79991234567">+7 999 123-45-67</a>
                <a className={Styles["footer__address-contact"]} href="mailto:example@example.com">example@example.com</a>
            </address>
        </div>
        <div className={Styles["footer__bottom"]}>
            <div className={Styles["company"]}>
                <Link to="hero" smooth={true} offset={-200} className={Styles["logo"]}>
                    <svg
                        width="153.000000"
                        height="48.000000"
                        viewBox="0 0 153 48"
                        fill="none"
                    >
                        <defs />
                        <path
                            id="Vector"
                            d="M95.72 15.81C95.29 15.81 94.89 15.75 94.54 15.62C94.17 15.49 93.85 15.29 93.57 15.01C93.03 14.47 92.76 13.77 92.76 12.9C92.76 12.74 92.77 12.59 92.79 12.44C92.81 12.29 92.84 12.15 92.88 12.02C93.01 11.56 93.25 11.16 93.61 10.82C94.17 10.26 94.88 9.98 95.72 9.98C96.54 9.98 97.24 10.25 97.83 10.78C98.42 11.32 98.72 12.03 98.72 12.9C98.72 13.77 98.43 14.47 97.87 15.01C97.31 15.55 96.59 15.81 95.72 15.81ZM71.99 38.39L71.99 11.25L76.79 11.25L76.79 34.02L90.92 34.02L90.92 38.39L71.99 38.39ZM124.86 38.39L124.86 11.25L129.55 11.25L129.55 26.26L132.47 26.26L137.8 18.16L143.06 18.16L136.5 27.8L143.6 38.39L138.15 38.39L132.74 30.37L129.55 30.37L129.55 38.39L124.86 38.39ZM9.59 11.99L14.39 11.99L14.39 38.39L9.59 38.39L9.59 11.99ZM16.79 11.99L21.59 11.99L21.59 38.39L16.79 38.39L16.79 11.99ZM23.99 11.99L28.79 11.99L28.79 38.39L23.99 38.39L23.99 11.99ZM31.19 11.99L35.99 11.99L35.99 38.39L31.19 38.39L31.19 11.99ZM38.39 11.99L64.79 11.99L64.79 16.79L38.39 16.79L38.39 11.99ZM102.22 38.39L102.22 18.16L106.6 18.16L106.87 20.73C107.1 20.42 107.35 20.13 107.62 19.88C107.81 19.7 108.01 19.54 108.21 19.39C108.39 19.26 108.56 19.15 108.75 19.04C109.14 18.82 109.54 18.63 109.95 18.48C110.29 18.35 110.65 18.24 111.02 18.16C111.81 17.95 112.55 17.85 113.24 17.85C113.71 17.85 114.16 17.88 114.58 17.93L114.79 17.95C115.01 17.98 115.21 18.02 115.41 18.07C116.34 18.27 117.13 18.62 117.78 19.12C118.9 19.96 119.69 21.09 120.15 22.5C120.62 23.91 120.85 25.48 120.85 27.22L120.85 38.39L116.16 38.39L116.16 27.99C116.16 27.25 116.11 26.53 116.01 25.84C115.97 25.57 115.91 25.31 115.85 25.06C115.81 24.92 115.77 24.79 115.72 24.66C115.7 24.58 115.67 24.5 115.63 24.42C115.56 24.25 115.48 24.08 115.39 23.92C115.11 23.35 114.7 22.91 114.16 22.57C113.86 22.39 113.5 22.25 113.08 22.17C112.76 22.11 112.4 22.07 112.01 22.07C110.91 22.07 109.98 22.37 109.21 22.96C108.44 23.55 107.87 24.34 107.48 25.34C107.1 26.31 106.91 27.42 106.91 28.68L106.91 38.39L102.22 38.39ZM93.38 38.39L93.38 18.16L98.06 18.16L98.06 38.39L93.38 38.39ZM38.39 19.19L64.79 19.19L64.79 23.99L38.39 23.99L38.39 19.19ZM38.39 26.39L64.79 26.39L64.79 31.19L38.39 31.19L38.39 26.39ZM38.39 33.59L64.79 33.59L64.79 38.39L38.39 38.39L38.39 33.59Z"
                            fill="#FFFFFF"
                        />
                    </svg>
                </Link>
                <SocialList />

            </div>
            <div className={Styles["footer__public"]}>
                <p className={Styles["company__info"]}>ООО «Пример компании», 2020–2023</p>
                <a href="" className={Styles["footer__public-link"]}>Политика конфиденциальности</a>
                <a href="" className={Styles["footer__public-link"]}>Публичная оферта</a>
            </div>
            <Link className={Styles["up"]} to="hero" smooth={true} offset={-200}>
                Вернуться наверх
                <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="#FFFFFF">
                    <desc>
                        Created with Pixso.
                    </desc>
                    <defs>
                        <clipPath id="clip711_4494">
                            <rect id="arrow-up" width="24.000000" height="24.000000" fill="white" />
                        </clipPath>
                    </defs>
                    <g>
                        <path id="Union" d="M12.6364 5.36358C12.2849 5.01211 11.715 5.01211 11.3636 5.36358L5.36358 11.3636C5.01211 11.715 5.01211 12.2849 5.36358 12.6364C5.71505 12.9878 6.2849 12.9878 6.63638 12.6364L11.1 8.17277L11.1 18C11.1 18.497 11.5029 18.9 12 18.9C12.497 18.9 12.9 18.497 12.9 18L12.9 8.17277L17.3636 12.6364C17.715 12.9878 18.2849 12.9878 18.6364 12.6364C18.9878 12.2849 18.9878 11.715 18.6364 11.3636L12.6364 5.36358Z" fill="#FFFFFF" />
                    </g>
                </svg>
            </Link>
        </div>
    </footer>
}