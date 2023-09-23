"use client"

import {useState} from "react";
import style from "./main-bg.module.scss";
import Image from "next/image";
import Vectorright from "@/../public/vectorright.svg";
import SecondModal from "../../modal/second.jsx";
import Popup from "../../popup/popup.jsx";
import MediaButttons from "../../../../../public/bxs_chat.svg";
import Telegram from "../../../../../public/telegram.svg";
import WhatsApp from "../../../../../public/whatsapp.png";
import "./social-media.scss";

function MainBG({properties}) {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    const handleButtonClick = () => {
        setShowButtons(!showButtons);
    };

    return (
        <>
            <div className="socmedia_container">
                <button onClick={handleButtonClick} className="socmedia_button">
                    <Image
                        src={MediaButttons}
                        className={showButtons ? 'socmedia_icon' : 'socmedia_icon clicked'}
                        alt="socmedia"
                    />
                </button>
                <div className={showButtons ? 'social-buttons show' : 'social-buttons hide'}>
                    <a
                        href={'https://t.me/' + properties.telegram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={Telegram} alt="Telegram"/>
                    </a>
                    <a
                        href={properties.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={WhatsApp} width={48} height={48} alt="WhatsApp"/>
                    </a>
                </div>
            </div>
            <section className={style.background}>
                <div className={style.container}>
                    <h1 className={style.h1}>perhin & partners</h1>
                    <h2 className={style.h2}>детективное агентство в москве</h2>

                    <SecondModal properties={properties} isOnMain={true}/>
                </div>
            </section>
            <div className={style.button_mobile}>
                <button
                    type="submit"
                    className={style.button}
                    onClick={() => setButtonPopup(true)}
                >
                    Оставить заявку
                    <div className={style.vector}>
                        <Image src={Vectorright} alt="Vectorright"/>
                    </div>
                </button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <SecondModal properties={properties} isMainMobile={true}/>
                </Popup>
            </div>
        </>
    );
}

export default MainBG;
