import style from "./form.module.scss";
import {useForm} from "react-hook-form";
import {useMediaQuery} from "react-responsive";
import InputMask from "react-input-mask";
import FormError from "../../../../public/FormError.jsx";
import FormCheck from "../../../../public/FormCheck.jsx";
import Vectorright from "../../../../public/vectorright.svg";
import {useState} from "react";
import mainstyles from "../home/main-bg/main-bg.module.scss";
import "../faq/faq.scss";
import axios from "axios";
import Image from "next/image";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function Form(props) {
    const isMobile = useMediaQuery({query: `(max-width: 580px)`});
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors},
        trigger,
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true)

        await axios.post(process.env.NEXT_PUBLIC_APP_API_URL + '/api/form/callback', data).finally(() => {
            props.isPopup ? props.onButtonClick() : props.onButtonClickShow();

            setIsLoading(false)
        })
    };

    const [isFocusName, setIsFocusName] = useState(false);
    const [isFocusNumber, setIsFocusNumber] = useState(false);
    const [isFocusQuestion, setIsFocusQuestion] = useState(false);

    const handleFocusName = () => {
        setIsFocusName(true);
        trigger("name").then();
    };

    const handleFocusNumber = () => {
        setIsFocusNumber(true);
        trigger("number").then();
    };

    const handleFocusQuestion = () => {
        setIsFocusQuestion(true);
        trigger("question").then();
    };

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
                <div className={style.wrapper}>
                    <input
                        {...register("name", {
                            required: true,
                            minLength: 2,
                        })}
                        onFocus={() => handleFocusName()}
                        onBlur={() => handleFocusName()}
                        className={style.name}
                        type="text"
                        placeholder="Как к вам обращаться?"
                    ></input>
                    {errors?.name?.type === "required" && (
                        <div className={style.icon}>
                            <FormError/>
                        </div>
                    )}
                    {!errors?.name && isFocusName && (
                        <div className={style.icon}>
                            <FormCheck/>
                        </div>
                    )}
                </div>

                <div className={style.wrapper}>
                    <InputMask
                        {...register("number", {
                            required: true,
                            minLength: 18,
                        })}
                        className={style.number}
                        type="text"
                        placeholder="Номер телефона"
                        mask="+7 (999) 999-99-99"
                        maskChar=""
                        onFocus={() => handleFocusNumber()}
                        onBlur={() => handleFocusNumber()}
                    />
                    {errors?.number?.type === "required" && (
                        <div className={style.icon}>
                            <FormError/>
                        </div>
                    )}
                    {errors?.number?.type === "minLength" && (
                        <div>
                            <FormError/>
                        </div>
                    )}
                    {!errors?.number && isFocusNumber && (
                        <div className={style.icon}>
                            <FormCheck/>
                        </div>
                    )}
                </div>

                {props.isPopup ? (
                    ""
                ) : (
                    <div className={style.wrapper}>
                        <input
                            {...register("question", {
                                required: true,
                                minLength: 2,
                            })}
                            className={style.question}
                            type="text"
                            placeholder="Какой вопрос вас беспокоит?"
                            onFocus={() => handleFocusQuestion()}
                            onBlur={() => handleFocusQuestion()}
                        ></input>
                        {errors?.question?.type === "required" && (
                            <div className={style.icon}>
                                <FormError/>
                            </div>
                        )}
                        {!errors?.question && isFocusQuestion && (
                            <div className={style.icon}>
                                <FormCheck/>
                            </div>
                        )}
                    </div>
                )}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={
                        props.isOnMain
                            ? mainstyles.button
                            : props.isPopup
                                ? style.button
                                : "button"
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
