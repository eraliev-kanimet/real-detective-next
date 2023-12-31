"use client"

import React, {useEffect, useState} from 'react';
import style from "@/app/(pages)/price/price.module.scss";
import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import CategoryTab from "@/app/components/catalog/tab";
import Table from "@/app/components/catalog/prices/prices";
import PriceMobile from "@/app/components/catalog/prices-mobile/prices-mobile";
import parse from "html-react-parser";

function Content({categories, text}) {
    const [category, setCategory] = useState('')
    const [items, setItems] = useState([])

    useEffect(() => {
        setCategoryItems(categories.hasOwnProperty('private_person') ? 'private_person' : 'business')
    }, [])

    const setCategoryItems = (key) => {
        setCategory(key)
        setItems(categories[key] ?? [])
    }

    return (
        <>
            <section className={style.price_header}>
                <Breadcrumbs links={[{last: true, name: 'Цены'}]}/>
                <h1 className={style.h1}>цены на услуги детективного агентства</h1>
                <div className={style.price_p}>{parse(text)}</div>
                <div className={style.services__tabs}>
                    {
                        categories.hasOwnProperty('private_person') ? (
                            <CategoryTab
                                onClick={() => setCategoryItems('private_person')}
                                current={category}
                                category='private_person'
                                categoryName='Для частных лиц'
                            />
                        ) : ''
                    }
                    {
                        categories.hasOwnProperty('business') ? (
                            <CategoryTab
                                onClick={() => setCategoryItems('business')}
                                current={category}
                                category='business'
                                categoryName='Для бизнеса'
                            />
                        ) : ''
                    }
                </div>
            </section>
            <section className={style.container}>
                {items.map(item => (
                    <div key={item.id}>
                        <h2 className={style.h2}>{item.name}</h2>
                        <Table items={item.subcategories}/>
                    </div>
                ))}
            </section>
            <section className={style.container_mobile}>
                {items.map(item => (
                    <div key={item.id}>
                        <h2 className={style.h2}>{item.name}</h2>
                        <PriceMobile items={item.subcategories}/>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Content;