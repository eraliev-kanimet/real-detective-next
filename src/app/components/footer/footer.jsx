import style from "./footer.module.scss";

import Image from "next/image";

import Logo from "@/../public/logo.svg";
import Telegram from "@/../public/footer-telegram.svg";
import Techat from "@/../public/footer-techat.svg";
import Youtube from "@/../public/footer-youtube.svg";
import Profi from "@/../public/footer-profi.svg";
import Location from "@/../public/footer-location.svg";
import Phone from "@/../public/footer-phone.svg";
import Time from "@/../public/footer-time.svg";
import Email from "@/../public/footer-email.svg";
import Mir from "@/../public/footer-mir.png";
import Visa from "@/../public/footer-visa.png";
import Mastercard from "@/../public/footer-mastercard.png";

export default function Footer({properties, categories}) {
    return (
        <footer className={style.container}>
            <div className={style.blokheader}>
                <Image src={Logo} alt="logo" className={style.logo}/>
                <div className={style.bloksocnet}>
                    <p className={style.p}>Мы в социальных сетях</p>

                    <div className={style.blokmobile}>
                        <a
                            className={style.bloknet}
                            href={'https://t.me/' + properties.telegram}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image src={Telegram} alt="Telegram"/>
                        </a>

                        <a
                            className={style.bloknet2}
                            href={properties.tenchat}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image src={Techat} alt="Techat"/>
                        </a>

                        <a
                            className={style.bloknet}
                            href={properties.youtube}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image src={Youtube} alt="Videos"/>
                        </a>

                        <a
                            className={style.bloknet}
                            href={properties.profi}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image src={Profi} alt="Profi"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className={style.blokmain}>
                <div className={style.blokmain1}>
                    <div className={style.contact}>
                        <p className={style.title}>Контакты</p>

                        <div className={style.section}>
                            <Image src={Location} alt="Location"/>
                            <p className={style.address}>{properties.address}</p>
                        </div>

                        <div className={style.section}>
                            <Image src={Phone} alt="Phone"/>
                            <p className={style.p}>{properties.phone}</p>
                        </div>

                        <div className={style.section}>
                            <Image src={Time} alt="Time"/>
                            <p className={style.p}>Понедельник-суббота 8:00-18:00</p>
                        </div>

                        <div className={style.section}>
                            <Image src={Email} alt="Email"/>
                            <p className={style.p}>{properties.email}</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <Image src={Mir} alt="Mir"/>
                        <Image src={Visa} alt="Visa"/>
                        <Image src={Mastercard} alt="Mastercard"/>
                    </div>
                </div>

                {
                    categories.private_person ? <div className={style.blokmain3}>
                        <p className={style.title}>Для частных лиц</p>
                        {
                            categories.private_person.map(category => (
                                <a href="/services" key={category.id}>
                                    <p className={style.p}>{ category.name }</p>
                                </a>
                            ))
                        }
                    </div> : ''
                }

                {
                    categories.business ? <div className={style.blokmain2}>
                        <p className={style.title}>Для бизнеса</p>
                        {
                            categories.business.map(category => (
                                <a href="/services" key={category.id}>
                                    <p className={style.p}>{ category.name }</p>
                                </a>
                            ))
                        }
                    </div> : ''
                }

                <div className={style.blokmain4}>
                    <p className={style.title}>Меню</p>
                    <a href="/blog">
                        <p className={style.p}>Блог</p>
                    </a>
                    <a href="/reviews">
                        <p className={style.p}>Отзывы</p>
                    </a>
                    <a href="/contacts">
                        <p className={style.p}>Контакты</p>
                    </a>
                    <a href="/services">
                        <p className={style.p}>Услуги</p>
                    </a>
                    <a href="/price">
                        <p className={style.p}>Цены</p>
                    </a>
                </div>
            </div>

            <div className={style.blokfooter}>
                <p className={style.p}>
                    © 2023 PERSIN & PARTNERS. Все права защищены
                </p>
                <div className={style.politic}>
                    <a href="/privacy-policy">
                        <p className={style.p}>Политика конфиденциальности</p>
                    </a>
                    <a href="/cookies-policy">
                        <p className={style.p}>Политика использования Cookies</p>
                    </a>
                    <a href="/sitemap">
                        <p className={style.p}>Карта сайта</p>
                    </a>
                </div>
            </div>
        </footer>
    );
}
