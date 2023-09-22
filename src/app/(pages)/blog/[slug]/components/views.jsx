"use client"

import React, {useEffect, useState} from 'react';
import style from "../articlepage.module.scss";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const Views = ({init, rating}) => {
    const [views, setViews] = useState(init)

    useEffect(() => {
        setTimeout(() => {
            axios.get(process.env.NEXT_PUBLIC_APP_API_URL + '/api/rating/views/' + rating).then(() => {
                setViews(Number(views) + 1)
            })
        }, 5000)
    })

    return (
        <p className={style.time}>{views}</p>
    );
};

export default Views;