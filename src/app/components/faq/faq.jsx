import FormPhoto from "@/../public/form-foto.png";
import "./faq.scss";
import SecondModal from "../modal/second.jsx";
import FaqItem from "./faq-item.jsx";
import Image from "next/image"

export default function FAQ({content, faq}) {
    return (
        <section className="faq-container">
            <h3 className="faq-h3">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h3>
            <div className="faq-blok">
                <div className="faq-question-blok">
                    {faq.map((item, index) => (
                        <FaqItem content={item} key={index}/>
                    ))}
                </div>
                <div className="faq-blokform">
                    <p className="faq-title">Связаться с частным детективом</p>
                    <div className="faq-blokdirector">
                        <Image src={FormPhoto} alt="director" className="photo"/>
                        <p className="faq-text">
                            {content.post}
                            <br/>
                            <span className="faq-textdirector">{content.name}</span>
                        </p>
                    </div>
                    <SecondModal/>
                </div>
            </div>
        </section>
    );
}
