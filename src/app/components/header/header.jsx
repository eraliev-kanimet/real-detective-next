import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.svg";
import Phone from "../../../../public/phone.svg";
import Telegram from "../../../../public/telegram.svg";
import WhatsApp from "../../../../public/whatsapp.png";
import style from "./header.module.scss";
import Navbar from "@/app/components/navbar/navbar";

export default function Header({properties, categories}) {
    return (
        <header>
            <div className={style.header}>
                <Link href="/">
                    <Image src={Logo} alt="logo" className={style.logo}/>
                </Link>
                <Navbar properties={properties} categories={categories}/>
                <div className={style.container}>
                    <div className={style.container_medium}>
                        <Image src={Phone} alt="phone"/>
                        <div className={style.container_small}>
                            <p className={style.number}>{properties.phone}</p>
                            <p className={style.timevisit}>Ежедневно с 8:00 до 22:00</p>
                        </div>
                    </div>
                    <a
                        href={'https://t.me/' + properties.telegram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={Telegram} alt="Telegram" className={style.telegram}/>
                    </a>
                    <a
                        href={`https://api.whatsapp.com/send?phone=${properties.whatsapp.replace(/\D/g, '')}&text=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8%20%D1%81%D1%83%D1%82%D0%BE%D0%BA!`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={WhatsApp} alt="WhatsApp" className={style.whatsapp}/>
                    </a>
                </div>
            </div>
        </header>
    );
}
