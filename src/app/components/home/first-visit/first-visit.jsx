import Image from "next/image";
import style from "./first-visit.module.scss";
import Chat from "@/../public/chat.svg";
import Car from "@/../public/car.svg";
import Users from "@/../public/users.svg";
import VideoChat from "@/../public/videochat.svg";
import parse from "html-react-parser";

export default function FirstVisit({content}) {
    const icons = [Chat, Users, Car, VideoChat, Chat, Users, Car, VideoChat]

    return (
        <section className={style.container}>
            <h3 className={style.h3}>{content.header}</h3>
            <div className={style.right}>
                <div className={style.about}>
                    {parse(content.description)}
                </div>

                {content.items.map((item, index) => (
                    <div key={index} className={style.blok}>
                        <Image src={icons[index]} alt="chat"/>
                        <div className={style.blokinside}>
                            <p className={style.title}>{item.header}</p>
                            {parse(item.description)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
