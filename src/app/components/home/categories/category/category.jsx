import style from "./category.module.scss";
import Foot from "@/../public/icon_foot.svg";
import Head from "@/../public/icon_head.svg";
import Camera from "@/../public/icon_camera.svg";
import ArrowRight from "@/../public/vectorright.svg"
import Image from "next/image";

export default function Category({category}) {
    const icons = {
        foot: Foot,
        head: Head,
        camera: Camera,
    }

    return (
        <div className={style.card}>
            <Image src={icons[category.icon]} className={style.card_icon} alt=""/>
            <a href={'/services/' + category.slug}>
                <p className={style.card_title}>{ category.name }</p>
            </a>
            <p className={style.card_text}>{ category.basic.description }</p>
            <div className={style.card_price_container}>
                <p className={style.card_price}>от {category.minimum_advance_amount} руб</p>
                <a href={'/services/' + category.slug}>
                    <div>
                        <span>Подробнее</span>
                        <Image
                            src={ArrowRight}
                            alt="Нажмите, чтобы узнать подробнее"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
}
