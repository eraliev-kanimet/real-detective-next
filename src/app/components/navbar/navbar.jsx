"use client"

import React, {useState} from "react";
import styled from "styled-components";
import style from "./navbar.module.scss";
import Category from "./categories/category.jsx";
import Item from "./item.jsx";
import Phone from "../../../../public/gg_phone.svg";
import Telegram from "../../../../public/telegram.svg";
import WhatsApp from "../../../../public/whatsapp.png";

const StyledBurger = styled.div`
    height: 30px;
    padding: 4px 15px;
    align-items: center;
    gap: 8px;
    position: fixed;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    border-radius: 48px;
    color: #fff;
    background-color: #110f0f;
    border: 1px solid rgba(255, 255, 255, 0.5);
    z-index: 20;
    display: none;

    @media screen and (max-width: 1230px) and (min-width: 675px) {
        display: flex;
        justify-content: space-around;
        flex-flow: row nowrap;
        left: 15%;
    }

    @media screen and (max-width: 674px) {
        display: flex;
        justify-content: space-around;
        flex-flow: row nowrap;
        right: 7%;
    }

    @media (max-width: 1230px) {
        .menu_background {
            position: fixed;
            z-index: 40;
            top: 88px;
            left: 0;
            height: 100vh;
            width: 100vh;
            background-color: rgba(17, 15, 15, 0.5);
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
    }

    .dark {
        background-color: rgba(17, 15, 15, 0.5);
    }

    div {
        &:nth-child(1) {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        &:nth-child(2) {
            transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }

        &:nth-child(3) {
            transform: ${({ open }) =>
                open ? "rotate(-45deg) scaleX(2)" : "rotate(0) scaleX(1)"};
        }
    }
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    column-gap: 1rem;
    margin-top: 0;

    a {
        text-decoration: none;
    }

    @media (max-width: 1230px) {
        flex-flow: column nowrap;
        background-color: #fff;
        position: fixed;
        z-index: 30;
        transform: ${({open}) => (open ? "translateX(0)" : "translateX(100%)")};
        top: 88px;
        left: 0;
        right: 0;
        padding: 24px 40px;
        transition: transform 0.3s ease-in-out;
    }

    @media (max-width: 600px) {
        flex-flow: column nowrap;
        background-color: #fff;
        position: fixed;
        z-index: 30;
        transform: ${({open}) => (open ? "translateX(0)" : "translateX(100%)")};
        top: 65px;
        left: 0;
        right: 0;
        padding: 24px 16px;
        height: 812px;
        transition: transform 0.3s ease-in-out;
        margin: 0;
    }`;

const Navbar = ({properties, categories}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <section className={style.menu}>
                    <div className={style.div1}/>
                    <div className={style.div2}/>
                    <div className={style.div3}/>
                </section>
                Меню
            </StyledBurger>
            <nav className={style.nav}>
                <div
                    className={`${style["menu-background"]} ${open ? style["dark"] : ""}`}
                >
                    <Ul open={open}>
                        <Category name="Для частных лиц" categories={categories.private_person ?? []}/>
                        <Category name="Для бизнеса" categories={categories.business ?? []}/>

                        {categories.private_person ?
                            <Item url='/services' name='Для частных лиц' classes={style.limob}/> : ''}
                        {categories.business ? <Item url='/services' name='Для бизнеса' classes={style.limob}/> : ''}

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
                                <img src={Telegram} alt="Telegram" className={style.telegram}/>
                            </a>
                            <a
                                className={style.a}
                                href={`https://api.whatsapp.com/send?phone=${properties.whatsapp.replace(/\D/g, '')}&text=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8%20%D1%81%D1%83%D1%82%D0%BE%D0%BA!`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={WhatsApp} alt="WhatsApp" className={style.whatsapp}/>
                            </a>
                        </div>
                    </Ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
