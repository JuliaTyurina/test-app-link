'use client'
import Styles from './Product.module.scss'
import Image from 'next/image'
import { Link } from 'react-scroll'

export const Product = () => {
    return <section id='product' className={Styles["product"]}>
        <div className={Styles["product__content"]}>
            <h3 id="product_anchor" className={Styles["product__title"]}>
                Продукт
            </h3>
            <p className={Styles["product__descr"]}>
                Мы&nbsp;уделяем особое внимание эргономике и&nbsp;стараемся соответствовать месту работы
            </p>
        </div>
        <div className={Styles["product__cards"]}>
            <div className={Styles["product__card"]}>
                <h4 className={Styles["product__card-title"]}>Работа</h4>
                <p className={Styles["product__card-descr"]}>Вы когда-нибудь задумывались о том, не слишком ли вы зависите от клиента в работе? Link поможет вам определиться</p>
                <button className={Styles["registration"]}>Регистрация</button>
                <Image
                    className={Styles["product__image1"]}
                    src="/images/laptop.webp"
                    width={414}
                    height={280}
                    alt="Интерфейс приложения Line"
                />
            </div>
            <div className={Styles["product__card"]}>
                <h4 className={Styles["product__card-title"]}>Дизайн с реальными данными</h4>
                <p className={Styles["product__card-descr"]}>Вы когда-нибудь задумывались о том, не слишком ли вы зависите от клиента в работе? Link поможет вам определиться</p>
                <Link to="request_anchor" smooth={true} offset={-210} className={Styles["trial"]}>Попробовать бесплатно</Link>
                <Image
                    className={Styles["product__image2"]}
                    src="/images/boards-notifications.webp"
                    width={384}
                    height={280}
                    alt="Интерфейс приложения Line"
                />
            </div>
        </div>
    </section>
}