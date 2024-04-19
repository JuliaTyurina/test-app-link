'use client'
import Styles from './Hero.module.scss'
import { Link } from 'react-scroll'

export const Hero = () => {
    return <section className={Styles["hero"]}>
        <div className={Styles["hero__content"]}>
            <h1 className={Styles["visually-hidden"]}></h1>
            <h2 id="hero" className={Styles["hero__title"]}>
                Работайте быстрее скорости мысли
            </h2>
            <p className={Styles["hero__descr"]}>
                Большинство календарей предназначены для команд. Link предназначен для фрилансеров, которым нужен простой способ планирования своего расписания
            </p>
            <div className={Styles["hero__buttons"]}>
                <Link to="request_anchor" smooth={true} offset={-210} className={Styles["hero__buttons-trial"]}>Попробовать бесплатно</Link>
                <Link to="benefits_anchor" smooth={true} offset={-100} className={Styles["hero__buttons-info"]}>Узнать больше</Link>
            </div>
        </div>
        <div className={Styles["hero__gradient"]}>
        </div>
    </section >
}