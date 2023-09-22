"use client"

import React, {useEffect, useState} from 'react';
import style from "@/app/(pages)/blog/[slug]/articlepage.module.scss";
import Image from "next/image";
import Telegram from "@/../public/footer-telegram.svg";
import Whatsapp from "@/../public/article-whatsapp.svg";
import Vk from "@/../public/article-vk.svg";
import Fc from "@/../public/article-facebook.svg";
import LikeImage from "@/../public/article-like.svg";
import DislikeImage from "@/../public/article-dislike.svg";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const LikeOrDislike = ({article_id, rating_id, initLikes, initDislikes}) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(initLikes);
    const [disliked, setDisliked] = useState(false);
    const [dislikes, setDislikes] = useState(initDislikes);

    useEffect(() => {
        setLiked(localStorage.getItem('article_liked' + article_id) === 'true');
        setDisliked(localStorage.getItem('article_disliked' + article_id) === 'true');
    }, []);

    const updateLocalStorage = async (key, value, data) => {
        if (value) {
            localStorage.setItem(key, 'true');
        } else {
            localStorage.removeItem(key);
        }

        return await axios.post(process.env.NEXT_PUBLIC_APP_API_URL + '/api/rating/likes_or_dislikes', {
            rating: rating_id,
            likes: data.likes,
            dislikes: data.dislikes,
        }).then(() => {
            setLikes(data.likes)
            setDislikes(data.dislikes)
        })
    };

    const likeHandle = async () => {
        let _likes = likes
        let _dislikes = dislikes

        if (liked) {
            _likes--;
        } else {
            _likes++;
            if (disliked) {
                _dislikes--;
                setDisliked(false);
                localStorage.removeItem('article_disliked' + article_id)
            }
        }

        setLiked(!liked);
        await updateLocalStorage('article_liked' + article_id, !liked, {
            likes: _likes,
            dislikes: _dislikes,
        }).then();
    };

    const dislikeHandle = async () => {
        let _likes = likes
        let _dislikes = dislikes

        if (disliked) {
            _dislikes--;
        } else {
            _dislikes++;

            if (liked) {
                _likes--
                setLiked(false);
                localStorage.removeItem('article_liked' + article_id)
            }
        }

        setDisliked(!disliked);
        await updateLocalStorage('article_disliked' + article_id, !disliked, {
            likes: _likes,
            dislikes: _dislikes,
        }).then();
    };

    return (
        <section className={style.section_socnet}>
            <div className={style.button_socnet}>
                <button
                    onClick={likeHandle}
                    type="button"
                    className={style.like}
                >
                    <Image src={LikeImage} alt="Like"/>
                    {likes}
                </button>
                <button
                    onClick={dislikeHandle}
                    type="button"
                    className={style.dislike}
                >
                    <Image src={DislikeImage} alt="Dislike"/>
                    {dislikes}
                </button>
            </div>
            <div className={style.bloksocnet}>
                <p className={style.p}>Поделиться</p>
                <div className={style.blokmobile}>
                    <a
                        className={style.bloknet}
                        href="https://t.me/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={Telegram} alt="Telegram"/>
                    </a>

                    <a
                        className={style.bloknet}
                        href="https://api.whatsapp.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={Whatsapp} alt="Whatsapp"/>
                    </a>

                    <a
                        className={style.bloknet}
                        href="https://vk.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={Vk} alt="Vk"/>
                    </a>

                    <a
                        className={style.bloknet}
                        href="https://es-es.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={Fc} alt="Fc"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LikeOrDislike;