import Styles from './Partners.module.scss'

export const Partners = () => {
    return <section id='partners' className={Styles["partners"]}>
        <div className={Styles["partners__content"]}>
            <h3 id="partners_anchor" className={Styles["partners__title"]}>
                Партнёры
            </h3>
            <p className={Styles["partners__descr"]}>
                Мы&nbsp;уделяем особое внимание эргономике и&nbsp;стараемся соответствовать месту работы
            </p>
        </div>
        <ul className={Styles["partners__list"]}>
            <li className={Styles["partners__item"]}>
                <picture className="partners__image">
                    <source srcSet='/images/m_logos_apple-app-store.svg' media="(max-width: 700px)"/>
                    <img src="/images/logos_apple-app-store.svg" alt="Логотип apple store" />
                </picture>

            </li>
            <li className={Styles["partners__item"]}>
                <picture className="partners__image">
                    <source srcSet='/images/m_logos_apiary.svg' media="(max-width: 700px)"/>
                    <img src="/images/logos_apiary.svg" alt="" />
                </picture>
            </li>
            <li className={Styles["partners__item"]}>
                <picture className="partners__image">
                    <source srcSet='/images/m_logos_android-icon.svg' media="(max-width: 700px)"/>
                    <img src="/images/logos_android-icon.svg" alt="" />
                </picture>
            </li>
            <li className={Styles["partners__item"]}>
                <picture className="partners__image">
                    <source srcSet='/images/m_logos_basecamp.svg' media="(max-width: 700px)"/>
                    <img src="/images/logos_basecamp.svg" alt="" />
                </picture>
            </li>
            <li className={Styles["partners__item"]}>
                <picture className="partners__image">
                    <source srcSet='/images/m_logos_airbnb.svg' media="(max-width: 700px)"/>
                    <img src="/images/logos_airbnb.svg" alt="" />
                </picture>
            </li>
            <li className={Styles["partners__item"]}>
                <picture className="partners__image">
                    <source srcSet='/images/m_blender-orange.svg' media="(max-width: 700px)"/>
                    <img src="/images/blender-orange.svg" alt="" />
                </picture>
            </li>
            <li className={`${Styles["partners__item"]} ${Styles["partners__ibm"]}`}>
                <picture className="partners__image">
                    <source srcSet='/images/m_logos_ibm.svg' media="(max-width: 700px)"/>
                    <img src="/images/logos_ibm.svg" alt="" />
                </picture>
            </li>
        </ul>
    </section>
}