import React from "react";
import FormPhoto from "@/../public/form-foto.png";
import "./faq.scss";
import SecondModal from "../modal/second.jsx";
import FaqItem from "./faq-item.jsx";
import Image from "next/image"

export default function FAQ({content, faq}) {
    return (
        <section className="container">
            <h3 className="h3">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h3>
            <div className="blok">
                <div className="question-blok">
                    {faq.map((item, index) => (
                        <FaqItem content={item} key={index}/>
                    ))}
                </div>
                <div className="blokform">
                    <p className="title">Связаться с частным детективом</p>
                    <div className="blokdirector">
                        <Image src={FormPhoto} alt="director" className="photo"/>
                        <p className="text">
                            {content.post}
                            <br/>
                            <span className="textdirector">{content.name}</span>
                        </p>
                    </div>
                    <SecondModal/>
                </div>
            </div>
        </section>
    );
}
