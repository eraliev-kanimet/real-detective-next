import Image from "next/image";
import React, { useState } from "react";
import "./social-media.scss";
import MediaButttons from "../../../../../public/bxs_chat.svg";
import Telegram from "../../../../../public/telegram.svg";
import WhatsApp from "../../../../../public/whatsapp.png";

const SocialMediaButtons = ({properties}) => {
    const [showButtons, setShowButtons] = useState(false);

    const handleButtonClick = () => {
        setShowButtons(!showButtons);
    };

    return (
        <div className="socmedia_container">
            <button onClick={handleButtonClick} className="socmedia_button">
                <Image
                    src={MediaButttons}
                    className={`socmedia_icon ${showButtons ? "clicked" : ""}`}
                    style={{
                        transition: "transform 0.3s ease",
                    }}
                    alt="socmedia"
                />
            </button>
            <div className={`social-buttons ${showButtons ? "show" : "hide"}`}>
                <a
                    href={'https://t.me/' + properties.telegram}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image src={Telegram} alt="Telegram" className="socmedia_telegram" />
                </a>
                <a
                    href={properties.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image src={WhatsApp} alt="WhatsApp" className="socmedia_whatsapp" />
                </a>
            </div>
        </div>
    );
};

export default SocialMediaButtons;
