"use client"

import React, {useEffect, useState} from 'react';
import style from "../articlepage.module.scss";
import axios from "axios";

const Views = ({init, rating}) => {
    const [views, setViews] = useState(init)

    useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:8000/api/rating/views/' + rating).then(() => {
                setViews(Number(views) + 1)
            })
        }, 5000)
    })

    return (
        <p className={style.time}>{views}</p>
    );
};

export default Views;