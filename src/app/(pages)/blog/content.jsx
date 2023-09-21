"use client"

import {useEffect, useState} from 'react';
import style from "@/app/(pages)/blog/blogpage.module.scss";
import Pagination from "@/app/components/pagination/pagination";
import Article from "@/app/components/article/article";
import axios from "axios";

const Content = () => {
    const [meta, setMeta] = useState({
        path: '',
        limit: 0,
        current: 0,
        last: 0,
        links: [],
    })
    const [articles, setArticles] = useState([])

    useEffect(async () => {
        await getArticles('http://localhost:8000/api/articles')
    }, [])

    const getArticles = async (url) => {
        await axios.get(url)
            .then(response => response.data)
            .then(response => {
                setArticles(response.data)

                setMeta({
                    path: response.meta.path,
                    limit: response.meta.per_page,
                    current: response.meta.current_page,
                    last: response.meta.last_page,
                    links: response.meta.links,
                })
            })
    }

    return (
        <>
            <div className={style.block_container}>
                {articles.map(article => <Article key={article.id} article={article}/>)}
            </div>
            <Pagination
                fetch={getArticles}
                path={meta.path}
                limit={meta.limit}
                initLimit={12}
                current={meta.current}
                last={meta.last}
                links={meta.links}
            />
        </>
    );
};

export default Content;