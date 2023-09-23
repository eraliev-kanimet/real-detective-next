"use client"

import {useState} from "react";
import style from "./navbar.module.scss";
import Category from "./category/category.jsx";
import Item from "./category/item.jsx";
import Phone from "@/../public/gg_phone.svg";
import Telegram from "@/../public/telegram.svg";
import WhatsApp from "@/../public/whatsapp.png";

const Navbar = ({properties, categories}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className={open ? [style.burger, style.active].join(' ') : style.burger}
                onClick={() => setOpen(!open)}
            >
                <section className={style.menu}>
                    <div/>
                    <div/>
                    <div/>
                </section>
                Меню
            </div>
            <nav className={style.nav}>
                <div
                    className={open ? [style.menu_background, style.dark].join(' ') : style.menu_background}
                >
                    <ul className={open ? [style.ul, style.active].join(' ') : style.ul}>
                        <Category name="Для частных лиц" categories={categories.private_person ?? []}/>
                        <Category name="Для бизнеса" categories={categories.business ?? []}/>

                        {categories.private_person ? <Item url='/services' name='Для частных лиц' mobile={true}/> : ''}
                        {categories.business ? <Item url='/services' name='Для бизнеса' mobile={true}/> : ''}

                        <Item url='/price' name='Цены'/>
                        <Item url='/blog' name='Блог'/>
                        <Item url='/reviews' name='Отзывы'/>
                        <Item url='/contacts' name='Контакты'/>
                        <Item url='/about' name='О компании'/>

                        <div className={style.navcontainer}>
                            <div className={style.container_medium}>
                                <img src={Phone} alt="phone"/>
                                <div className={style.container_small}>
                                    <p className={style.number}>{properties.phone}</p>
                                    <p className={style.timevisit}>Ежедневно с 8:00 до 22:00</p>
                                </div>
                            </div>
                            <a
                                className={style.a}
                                href={'https://t.me/' + properties.telegram}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={Telegram} alt="Telegram" className={style.link}/>
                            </a>
                            <a
                                className={style.a}
                                href={`https://api.whatsapp.com/send?phone=${properties.whatsapp.replace(/\D/g, '')}&text=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8%20%D1%81%D1%83%D1%82%D0%BE%D0%BA!`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={WhatsApp} alt="WhatsApp" className={style.link}/>
                            </a>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
