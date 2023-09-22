import Image from "next/image";
import {useState} from "react";
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
    );
};

export default SocialMediaButtons;
