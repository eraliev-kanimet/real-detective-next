import style from "./about.module.scss";
import Img from "@/../public/about.png";
import parse from 'html-react-parser';
import Image from "next/image"

export default function About({content}) {
    return (
        <>
            <section className={style.container}>
                <div className={style.left}>
                    <h3 className={style.h3}>О нас</h3>
                    <div className={[style.paragraph, style.partners].join(' ')}>
                        {parse(content.text)}
                    </div>
                </div>
                <div className={style.right}>
                    <Image src={Img} alt=""/>
                    <div className={style.about}>
                        {content.items.map((item, index) => (
                            <div key={index} className={style.blok}>
                                <p className={style.number}>{ index + 1 }</p>
                                <p className={style.title}>{ item.header }</p>
                                <div className={style.smalltext}>{ parse(item.description) }</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
