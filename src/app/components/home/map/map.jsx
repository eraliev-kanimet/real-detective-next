import React from "react";
import style from "./map.module.scss";
import Vectorright from "@/../public/vectorright.svg";
import Image from "next/image";

export default function Map({map}) {
    return (
        <section className={style.container}>
            <div className={style.blok}>
                <h3 className={style.h3}>Где мы находимся?</h3>
                <a href="/contacts">
                    <button type="submit" className={style.button}>
                        Все контакты
                        <div className={style.vector}>
                            <Image
                                src={Vectorright}
                                alt="Vectorright"
                                className={style.vector}
                            />
                        </div>
                    </button>
                </a>
            </div>
            <iframe
                src={map}
                style={{
                    width: "100%",
                    height: "600px",
                    border: "0px",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade",
                }}
            ></iframe>
        </section>
    );
}
