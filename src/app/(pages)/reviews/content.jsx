"use client"

import {useEffect, useState} from 'react';
import style from "@/app/(pages)/reviews/reviews.module.scss";
import Review from "@/app/components/review-card/review-card";
import Pagination from "@/app/components/pagination/pagination";
import axios from "axios";

const Content = () => {
    const [meta, setMeta] = useState({
        path: '',
        limit: 0,
        current: 0,
        last: 0,
        links: [],
    })
    const [reviews, setReviews] = useState([])

    useEffect(async () => {
        await getReviews('http://localhost:8000/api/reviews')
    }, [])

    const getReviews = async (url) => {
        await axios.get(url)
            .then(response => response.data)
            .then(response => {
                setReviews(response.data)

                setMeta({
                    path: response.path,
                    limit: response.per_page,
                    current: response.current_page,
                    last: response.last_page,
                    links: response.links,
                })
            })
    }

    return (
        <>
            <div className={style.page_block}>
                {reviews.map(review => <Review key={review.id} review={review}/>)}
            </div>
            <Pagination
                fetch={getReviews}
                path={meta.path}
                limit={meta.limit}
                initLimit={4}
                current={meta.current}
                last={meta.last}
                links={meta.links}
            />
        </>
    );
};

export default Content;