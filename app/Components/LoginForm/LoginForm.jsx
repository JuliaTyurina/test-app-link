'use client'
import { useState } from 'react';
import Styles from './LoginForm.module.scss'

export const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }
    return (
        <form className={Styles["login__form"]}>
            <h4 className={Styles["login__title"]}>Вход в систему</h4>
            <div className={Styles["login__form-block"]}>
                <label className={Styles["login__label"]}>E-mail</label>
                <input
                    className={Styles["login__input"]}
                    type="email"
                    id="email"
                    name="email"
                    placeholder='example@email.com'
                    required
                />
            </div>
            <div className={`${Styles["login__form-block"]} ${Styles["password"]}`}>
                <label className={Styles["login__label"]}>Пароль</label>
                <input
                    className={Styles["login__input"]}
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder={passwordVisible ? "Введите пароль" : ".................."}
                    required
                />
                {passwordVisible ? (<svg onClick={togglePasswordVisibility} className={Styles["password__opened"]} width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                <defs>
                    <clipPath id="clip719_4745">
                        <rect id="eye" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                    </clipPath>
                </defs>
                <g clipPath="url(#clip719_4745)">
                    <path id="shape" d="M2.34 11.8C3.34 7.39 7.28 4.1 12 4.1C16.71 4.1 20.65 7.39 21.65 11.8C21.68 11.93 21.68 12.06 21.65 12.19C20.65 16.6 16.71 19.9 12 19.9C7.28 19.9 3.34 16.6 2.34 12.19C2.31 12.06 2.31 11.93 2.34 11.8ZM4.14 12C5.03 15.5 8.21 18.1 12 18.1C15.78 18.1 18.96 15.5 19.85 12C18.96 8.49 15.78 5.9 12 5.9C8.21 5.9 5.03 8.49 4.14 12ZM8.09 12C8.09 9.84 9.84 8.1 12 8.1C14.15 8.1 15.9 9.84 15.9 12C15.9 14.15 14.15 15.9 12 15.9C9.84 15.9 8.09 14.15 8.09 12ZM12 9.9C10.84 9.9 9.89 10.84 9.89 12C9.89 13.15 10.84 14.1 12 14.1C13.15 14.1 14.1 13.15 14.1 12C14.1 10.84 13.15 9.9 12 9.9Z" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                </g>
            </svg>) : (
                    <svg onClick={togglePasswordVisibility} className={Styles["password__closed"]} width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
                    <defs>
                        <clipPath id="clip719_4743">
                            <rect id="eye-slash" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#clip719_4743)">
                        <path id="shape" d="M20.63 3.36C20.98 3.71 20.98 4.28 20.63 4.63L4.63 20.63C4.28 20.98 3.71 20.98 3.36 20.63C3.01 20.28 3.01 19.71 3.36 19.36L5.37 17.35C3.88 16.01 2.8 14.22 2.34 12.19C2.31 12.06 2.31 11.93 2.34 11.8C3.34 7.39 7.28 4.1 12 4.1C13.89 4.1 15.66 4.63 17.17 5.55L19.36 3.36C19.71 3.01 20.28 3.01 20.63 3.36ZM15.85 6.87C14.7 6.25 13.39 5.9 12 5.9C8.21 5.9 5.03 8.49 4.14 12C4.55 13.6 5.44 15.01 6.64 16.07L8.68 14.04C8.31 13.45 8.09 12.75 8.09 12C8.09 9.84 9.84 8.1 12 8.1C12.75 8.1 13.45 8.31 14.04 8.68L15.85 6.87ZM12.7 10.02C12.48 9.94 12.24 9.9 12 9.9C10.84 9.9 9.89 10.84 9.89 12C9.89 12.24 9.94 12.48 10.02 12.7L12.7 10.02ZM18.75 7.98C19.15 7.69 19.72 7.78 20.01 8.18C20.78 9.24 21.35 10.47 21.65 11.8C21.68 11.93 21.68 12.06 21.65 12.19C20.65 16.6 16.71 19.9 12 19.9C11 19.9 10.03 19.75 9.12 19.47C8.64 19.33 8.38 18.82 8.52 18.35C8.66 17.87 9.17 17.6 9.64 17.75C10.39 17.97 11.18 18.1 12 18.1C15.78 18.1 18.96 15.5 19.85 12C19.59 10.99 19.15 10.06 18.55 9.24C18.26 8.84 18.35 8.27 18.75 7.98Z" fill="#fff" fillOpacity="1.000000" fillRule="evenodd" />
                    </g>
                </svg>
                )
            }
            </div>

            <div className={Styles["checkbox"]}>
                <input className={Styles["checkbox__input"]} type="checkbox" id="memory" name="memory" />
                <label className={Styles["checkbox__label"]} >Запомнить меня</label>
            </div>
            <button className={Styles["login__form-btn"]} type="submit">Войти</button>
            <p className={Styles["login__with"]}>Или войдите с помощью</p>
            <div className={Styles["login__buttons"]}>
                <button className={Styles["google"]}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <defs>
                            <clipPath id="clip719_4727">
                                <rect id="google" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                            </clipPath>
                        </defs>
                        <rect id="google" width="24.000000" height="24.000000" fill="#FFFFFF" fillOpacity="0" />
                        <g clipPath="url(#clip719_4727)">
                            <path id="shape" d="M20.64 10.36L12.18 10.36L12.18 13.84L17.01 13.84C16.8 14.97 16.17 15.92 15.22 16.56C14.41 17.1 13.38 17.42 12.17 17.42C9.83 17.42 7.85 15.83 7.14 13.71C6.97 13.17 6.86 12.59 6.86 12C6.86 11.41 6.97 10.83 7.14 10.29C7.85 8.17 9.83 6.59 12.18 6.59C13.5 6.59 14.68 7.04 15.61 7.93L18.19 5.35C16.63 3.9 14.6 3.01 12.18 3.01C8.66 3.01 5.62 5.02 4.14 7.96C3.53 9.18 3.19 10.55 3.19 12C3.19 13.46 3.53 14.83 4.14 16.04C5.62 18.98 8.66 21 12.18 21C14.6 21 16.64 20.19 18.12 18.82C19.82 17.25 20.81 14.94 20.81 12.2C20.81 11.57 20.75 10.95 20.64 10.36Z" fill="#fff" fillOpacity="1.000000" fillRule="nonzero" />
                        </g>
                    </svg>

                    Google</button>
                <button className={Styles["apple"]}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <defs>
                            <clipPath id="clip719_4725">
                                <rect id="apple" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                            </clipPath>
                        </defs>
                        <rect id="apple" width="24.000000" height="24.000000" fill="#fff" fillOpacity="0" />
                        <g clipPath="url(#clip719_4725)">
                            <path id="shape" d="M18.7 19.5C17.87 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.46C4.25 17 2.94 12.45 4.69 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.46 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.7 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="#fff" fillOpacity="1.000000" fillRule="nonzero" />
                        </g>
                    </svg>

                    Apple ID</button>
            </div>
            <p className={Styles["login__first"]}>
                Впервые в системе?
                <a href="#" className={Styles["login__link"]}> Регистрация</a>
            </p>
        </form>
    )
}