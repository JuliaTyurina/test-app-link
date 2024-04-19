'use client'
import { useState } from 'react';
import Styles from './RequestForm.module.scss'

export const RequestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comment: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправленная форма:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setFormData({
                name: '',
                phone: '',
                email: '',
                comment: ''
            });
            setSubmitted(false);
        }, 3000)
    };

    return (
        <section className={Styles["request"]}>
            <div className={Styles["request__content"]}>
                <div className={Styles["request__back"]}>
                    <div className={Styles["request__image"]}>
                        <div className={Styles["request__info"]}>
                            <h3 id="request_anchor" className={Styles["request__title"]}>
                                Оставьте заявку на&nbsp;бетатест
                            </h3>
                            <p className={Styles["request__descr"]}>
                                Мы&nbsp;уделяем особое внимание эргономике и&nbsp;стараемся соответствовать месту работы
                            </p>
                        </div>
                    </div>
                </div>

                <form className={Styles["request__form"]} onSubmit={handleSubmit}>
                    <div className={Styles["request__form-block"]}>
                        <label className={Styles["request__label"]}>Ваше имя</label>
                        <input
                            className={Styles["request__input"]}
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Иван'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={Styles["request__form-block"]}>
                        <label className={Styles["request__label"]}>Номер телефона</label>
                        <input
                            className={Styles["request__input"]}
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder='+7 000 000-00-00'
                            pattern="(7|8)[0-9]{10}"
                            title="Номер телефона должен быть в формате 70000000000 или 8000000000"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={Styles["request__form-block"]}>
                        <label className={Styles["request__label"]}>E-mail</label>
                        <input
                            className={Styles["request__input"]}
                            type="email"
                            id="email"
                            name="email"
                            placeholder='example@email.com'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={Styles["request__form-block"]}>
                        <label className={Styles["request__label"]}>Комментарий к заявке</label>
                        <textarea
                            className={Styles["request__textarea"]}
                            id="comment"
                            name="comment"
                            placeholder='Здравствуйте, хотелось бы...'
                            value={formData.comment}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <p className={Styles["request__form-agreement"]}>Нажимая &laquo;Отправить&raquo; вы&nbsp;соглашаетесь с <a className={Styles["request__form-link"]} href="#">политикой&nbsp;конфиденциальности</a></p>
                    <button className={Styles["request__form-btn"]} type="submit">Отправить</button>
                    {submitted && <p className={Styles["request__form-notification"]}>Данные отправлены!</p>}
                </form>
            </div>
        </section>
    );
};