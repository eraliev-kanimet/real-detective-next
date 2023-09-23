import axios from "axios";
import Image from "next/image";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useMediaQuery} from "react-responsive";
import InputMask from "react-input-mask";
import FormError from "@/../public/FormError.jsx";
import FormCheck from "@/../public/FormCheck.jsx";
import Vectorright from "@/../public/vectorright.svg";
import mainstyles from "../home/main-bg/main-bg.module.scss";
import style from "./form.module.scss";

export default function Form(props) {
    const isMobile = useMediaQuery({query: "(max-width: 580px)"});
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
        trigger,
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);

        await axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/api/form/callback`, data)
            .then(() => {
                if (props.isPopup) {
                    props.onButtonClick();
                } else {
                    props.onButtonClickShow();
                }
            }).finally(() => {
                setIsLoading(false);
            });
    };

    const [isFocus, setIsFocus] = useState({
        name: false,
        number: false,
        question: false,
    });

    const handleFocus = (field) => {
        setIsFocus({...isFocus, [field]: true});
        trigger(field).then();
    };

    const renderInputField = (name, placeholder, mask = null) => (
        <div className={style.wrapper}>
            {mask ? (
                <InputMask
                    {...register(name, {
                        required: true,
                        minLength: 2,
                    })}
                    className={style.input_field}
                    type="text"
                    placeholder={placeholder}
                    mask={mask}
                    maskChar=""
                    onFocus={() => handleFocus(name)}
                    onBlur={() => handleFocus(name)}
                />
            ) : (
                <input
                    {...register(name, {
                        required: true,
                        minLength: 2,
                    })}
                    onFocus={() => handleFocus(name)}
                    onBlur={() => handleFocus(name)}
                    className={style.input_field}
                    type="text"
                    placeholder={placeholder}
                />
            )}
            {errors[name]?.type === "required" && (
                <div className={style.icon}>
                    <FormError/>
                </div>
            )}
            {!errors[name] && isFocus[name] && (
                <div className={style.icon}>
                    <FormCheck/>
                </div>
            )}
        </div>
    );

    if (props.isOnMain && isMobile) {
        return null;
    } else {
        return (
            <form
                className={
                    props.isOnMain ? mainstyles.form : props.isPopup ? style.form : "form"
                }
                onSubmit={handleSubmit(onSubmit)}
            >
                {renderInputField("name", "Как к вам обращаться?")}
                {renderInputField("number", "Номер телефона", "+7 (999) 999-99-99")}

                {!props.isPopup && (renderInputField("question", "Какой вопрос вас беспокоит?"))}

                <button
                    type="submit"
                    disabled={isLoading}
                    className={
                        props.isOnMain
                            ? mainstyles.button
                            : props.isPopup
                                ? style.button
                                : style.button2
                    }
                >
                    {props.isOnMain ? "Отправить заявку" : "Отправить"}
                    <div className={style.vector}>
                        <Image src={Vectorright} alt="Vectorright"/>
                    </div>
                </button>
            </form>
        );
    }
}
