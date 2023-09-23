"use client"

import {useState} from 'react';
import style from "@/app/(pages)/services/[slug]/service.module.scss";
import Image from "next/image";
import Star from "@/../public/icon_star.svg";
import VectorRight from "@/../public/vectorright.svg";
import SecondModal from "@/app/components/modal/second";
import PopupPopup from "@/app/components/popup/popup";

const Popup = ({properties, rating, ratings = []}) => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <>
            <PopupPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <SecondModal properties={properties} HowToReachUs={true}/>
            </PopupPopup>
            <div className={style.blok_buy}>
                <button
                    onClick={() => setButtonPopup(true)}
                    className={style.button_buy}
                    type="button"
                >
                    Заказать услугу
                    <Image src={VectorRight} alt="vector" className={style.icon}/>
                </button>

                <div className={style.blokmobile_rating}>
                    <p className={style.text_rating}>{rating}</p>
                    <div className={style.blok_star}>
                        {ratings.map((rating, index) => <Image key={index} src={Star} alt="star"/>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;