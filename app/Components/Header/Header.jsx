'use client'
import Styles from '@/app/Components/Header/Header.module.scss';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { LoginForm } from '../LoginForm/LoginForm';
import { Overlay } from '../Overlay/Overlay';
import { Popup } from '../Popup/Popup';
import { SocialList } from '../SocialList/SocialList';

export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [showBurgerMenu, setshowBurgerMenu] = useState(false)


  const login = () => {
    setPopupIsOpened(true)
    setShowLoginForm(true)
  }

  const closePopup = () => {
    setPopupIsOpened(false)
  }

  const toggleBurgerMenu = () => {
    setshowBurgerMenu(!showBurgerMenu)
  }

  return (
    <header className={Styles["header"]}>
      <div className={Styles["header__wrapper"]}>
        <div className={Styles["logo"]}>
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
        </div>
        <div className={`${Styles["header__navigation"]} ${showBurgerMenu && Styles["display-block"]}`}>
          <nav className={Styles["menu"]}>
            <ul className={Styles["menu__list"]}>
              <li className={Styles["menu__item"]}>
                <Link className={Styles["menu__link"]}
                  to="benefits_anchor"
                  smooth={true}
                  offset={-100}
                >Преимущества</Link>
              </li>
              <li className={Styles["menu__item"]}>
                <Link className={Styles["menu__link"]}
                  to="product_anchor"
                  smooth={true}
                  offset={-100}
                >Продукт</Link>
              </li>
              <li className={Styles["menu__item"]}>
                <Link className={Styles["menu__link"]}
                  to="photos_anchor"
                  smooth={true}
                  offset={-100}
                >Галерея</Link>
              </li>
              <li className={Styles["menu__item"]}>
                <Link className={Styles["menu__link"]}
                  to="partners_anchor"
                  smooth={true}
                  offset={-100}
                >Партнеры</Link>
              </li>
              <li className={Styles["menu__item"]}>
                <Link className={Styles["menu__link"]}
                  to="reviews_anchor"
                  smooth={true}
                  offset={-100}
                >Отзывы</Link>
              </li>
            </ul>
          </nav>
          {showBurgerMenu &&
            <>
              <SocialList />
              <Link to="request_anchor" smooth={true} offset={-210} className={Styles["button-trial"]}>Попробовать бесплатно</Link>
            </>}
        </div>

        <div className={Styles["header__buttons"]}>
          <button className={Styles['auth__button']} isModalOpened={popupIsOpened} onClick={login}>Войти</button>
          <div className={Styles["burger"]}>
            {showBurgerMenu ? (<button className={Styles['burger__opened']} onClick={toggleBurgerMenu}>
              <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                <defs>
                  <clipPath id="clip718_4668">
                    <rect id="cancel" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip718_4668)">
                  <path id="Union" d="M19.6364 4.36361C19.9878 4.71508 19.9878 5.28493 19.6364 5.6364L13.2728 12L19.6364 18.3636C19.9878 18.7151 19.9878 19.2849 19.6364 19.6364C19.2849 19.9879 18.7151 19.9879 18.3636 19.6364L12 13.2728L5.63637 19.6364C5.2849 19.9879 4.71506 19.9879 4.36359 19.6364C4.0121 19.2849 4.0121 18.7151 4.36359 18.3636L10.7272 12L4.36359 5.6364C4.0121 5.28493 4.0121 4.71508 4.36359 4.36361C4.71506 4.01214 5.2849 4.01214 5.63637 4.36361L12 10.7272L18.3636 4.36361C18.7151 4.01214 19.2849 4.01214 19.6364 4.36361Z" clipRule="evenodd" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                </g>
              </svg>
            </button>) : (<button className={Styles['burger__closed']} onClick={toggleBurgerMenu}>
              <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" >
                <defs>
                  <clipPath id="clip718_4665">
                    <rect id="menu" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip718_4665)">
                  <path id="Union" d="M2.99997 5.10004C2.50291 5.10004 2.09998 5.50298 2.09998 6.00004C2.09998 6.49709 2.50291 6.90004 2.99997 6.90004L21 6.90004C21.497 6.90004 21.9 6.49709 21.9 6.00004C21.9 5.50298 21.497 5.10004 21 5.10004L2.99997 5.10004ZM2.99997 11.1C2.50291 11.1 2.09998 11.503 2.09998 12C2.09998 12.4971 2.50291 12.9 2.99997 12.9L21 12.9C21.497 12.9 21.9 12.4971 21.9 12C21.9 11.503 21.497 11.1 21 11.1L2.99997 11.1ZM2.99997 17.1C2.50291 17.1 2.09998 17.503 2.09998 18C2.09998 18.4971 2.50291 18.9 2.99997 18.9L21 18.9C21.497 18.9 21.9 18.4971 21.9 18C21.9 17.503 21.497 17.1 21 17.1L2.99997 17.1Z" clipRule="evenodd" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                </g>
              </svg>
            </button>
            )
            }
          </div>
        </div>

        <Overlay close={closePopup} isModalOpened={popupIsOpened} />
        <Popup close={closePopup} isModalOpened={popupIsOpened} showLoginForm={showLoginForm}>
          <LoginForm />
        </Popup>
      </div>

    </header>
  );
};
