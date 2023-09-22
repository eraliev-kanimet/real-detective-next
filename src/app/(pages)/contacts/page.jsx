import style from "./contacts.module.scss";
import Image from "next/image";
import Phone from "@/../public/footer-phone.svg";
import Location from "@/../public/footer-location.svg";
import Telegram from "@/../public/contact-telegram.svg";
import Whatsapp from "@/../public/contact-whatsapp.svg";
import fetchContent from "@/services/fetch";
import Layout from "@/app/components/Layout";

const props = await fetchContent('contacts')

export default async function Contacts() {
    return (
        <Layout
            properties={props.properties}
            categories={props.categories}
        >
            <main className={style.container}>
                <section className={style.blokmoscow}>
                    <h3 className={style.h3}>Москва</h3>

                    <div className={style.section}>
                        <div className={style.smallsection}>
                            <p className={style.title}>Телефон</p>
                            <p className={style.p}>{props.properties.phone}</p>
                        </div>
                        <Image src={Phone} alt="Phone" className={style.icon}/>
                    </div>

                    <div className={style.section}>
                        <div className={style.smallsection2}>
                            <p className={style.title}>Адрес</p>
                            <p className={style.p}>{props.properties.address}</p>
                        </div>
                        <Image src={Location} alt="Location" className={style.icon}/>
                    </div>
                </section>

                <section className={style.blokmap}>
                    <iframe
                        src={props.properties.map}
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "0px",
                            loading: "lazy",
                            referrerpolicy: "no-referrer-when-downgrade",
                        }}
                    ></iframe>
                </section>

                <section className={style.bloksms}>
                    <h1 className={style.h1}>Написать в мессенджер</h1>
                    <a
                        className={style.section2}
                        href={'https://t.me/' + props.properties.telegram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={style.smallsection}>
                            <p className={style.title}>Telegram</p>
                            <p className={style.p}>@{props.properties.telegram}</p>
                        </div>
                        <Image src={Telegram} alt="Telegram" className={style.icon}/>
                    </a>
                    <a
                        className={style.section2}
                        href={`https://api.whatsapp.com/send?phone=${props.properties.whatsapp.replace(/\D/g, '')}&text=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8%20%D1%81%D1%83%D1%82%D0%BE%D0%BA!`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={style.smallsection3}>
                            <p className={style.title}>WhatsApp</p>
                            <p className={style.p}>{props.properties.whatsapp}</p>
                        </div>
                        <Image src={Whatsapp} alt="Whatsapp" className={style.icon}/>
                    </a>
                </section>

                <section className={style.blokblogs}>
                    <h2 className={style.h2}>Наши блоги</h2>

                    <a
                        className={style.section2}
                        href={'https://t.me/' + props.properties.telegram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={style.smallsection}>
                            <p className={style.title}>Telegram</p>
                            <p className={style.p}>@{props.properties.telegram}</p>
                        </div>
                        <Image src={Telegram} alt="Telegram" className={style.icon}/>
                    </a>
                    <a
                        className={style.section2}
                        href={`https://api.whatsapp.com/send?phone=${props.properties.whatsapp.replace(/\D/g, '')}&text=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8%20%D1%81%D1%83%D1%82%D0%BE%D0%BA!`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={style.smallsection3}>
                            <p className={style.title}>WhatsApp</p>
                            <p className={style.p}>{props.properties.whatsapp}</p>
                        </div>
                        <Image src={Whatsapp} alt="Whatsapp" className={style.icon}/>
                    </a>
                </section>
            </main>
        </Layout>
    );
}