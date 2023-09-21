"use client"

import {useEffect, useState} from 'react';
import style from './index.module.scss'
import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import CategoryTab from "@/app/components/catalog/tab";

import Image from "next/image";
import ArrowDown from "../../../../public/biege_arrow_down.svg";
import Info from "../../../../public/services-chat.svg";
import Family from "../../../../public/services-family.svg";
import Binoculars from "../../../../public/services-binoculars.svg";
import Search from "../../../../public/services-search.svg";
import Protect from "../../../../public/services-protect.svg";
import Journalism from "../../../../public/services-journalism.svg";

const Content = ({categories}) => {
    const [category, setCategory] = useState('')
    const [items, setItems] = useState([])

    useEffect(() => {
        setCategoryItems(categories.hasOwnProperty('private_person') ? 'private_person' : 'business')
    }, [])

    const setCategoryItems = (key) => {
        setCategory(key)
        setItems(categories[key] ?? [])
    }

    return (<>
            <section className={style.section_header}>
                <Breadcrumbs links={[{last: true, name: 'Услуги'}]}/>
                <h1 className={style.h1}>Услуги</h1>
                <div className={style.services__tabs}>
                    {categories.hasOwnProperty('private_person') ? (<CategoryTab
                            onClick={() => setCategoryItems('private_person')}
                            current={category}
                            category='private_person'
                            categoryName='Для частных лиц'
                        />) : ''}
                    {categories.hasOwnProperty('business') ? (<CategoryTab
                            onClick={() => setCategoryItems('business')}
                            current={category}
                            category='business'
                            categoryName='Для бизнеса'
                        />) : ''}
                </div>
            </section>
            <section className={style.catalog}>
                {items.map(subcategory => (<Category key={subcategory.id} category={subcategory}/>))}
            </section>
            <section className={style.catalog_mobile}>
                {items.map(subcategory => (<CategoryMobile key={subcategory.id} category={subcategory}/>))}
            </section>
        </>);
};

export default Content;

const Category = ({category}) => {
    const icons = {
        info: <Image src={Info} alt="Info" className={style.img}/>,
        family: <Image src={Family} alt="Family" className={style.img}/>,
        binoculars: <Image src={Binoculars} alt="Binoculars" className={style.img}/>,
        search: <Image src={Search} alt="Search" className={style.img}/>,
        protect: <Image src={Protect} alt="Protect" className={style.img}/>,
        journalism: <Image src={Journalism} alt="Journalism" className={style.img}/>,
        default: <Image src={Info} alt="Info" className={style.img}/>,
    }

    const getIcon = (icon) => {
        if (icons.hasOwnProperty(icon)) {
            return icons[icon]
        }

        return icons.default
    }

    const [visibleItems, setVisibleItems] = useState(5);

    const showMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
    };

    return (<section>
            {getIcon(category.icon)}
            <h2 className={style.h2}>{category.name}</h2>
            {category.subcategories.slice(0, visibleItems).map(item => (
                <a key={item.id} href={'/services/' + item.slug}>
                    <p className={style.text}>{item.name}</p>
                </a>))}
            {visibleItems < category.subcategories.length ? (<button className={style.button} onClick={showMoreItems}>
                    Ещё {category.subcategories.slice(5).length}
                </button>) : (category.subcategories.length > 5 ? (
                    <button className={style.button} onClick={() => setVisibleItems(5)}>Скрыть</button>) : null)}
        </section>);
};

const CategoryMobile = ({category}) => {
    const [showItems, setShowItems] = useState(false);

    const icons = {
        info: <Image
            src={Info}
            alt="Info"
            className={style.img}
            style={{
                filter: showItems ? "brightness(0%) saturate(100%)" : "none", transitionDuration: "0.2s",
            }}
        />, family: <Image
            src={Family}
            alt="Family"
            className={style.img}
            style={{
                filter: showItems ? "brightness(0%) saturate(100%)" : "none", transitionDuration: "0.2s",
            }}
        />, binoculars: <Image
            src={Binoculars}
            alt="Binoculars"
            className={style.img}
            style={{
                filter: showItems ? "brightness(0%) saturate(100%)" : "none", transitionDuration: "0.2s",
            }}
        />, search: <Image
            src={Search}
            alt="Search"
            className={style.img}
            style={{
                filter: showItems ? "brightness(0%) saturate(100%)" : "none", transitionDuration: "0.2s",
            }}
        />, protect: <Image
            src={Protect}
            alt="Protect"
            className={style.img}
            style={{
                filter: showItems ? "brightness(0%) saturate(100%)" : "none", transitionDuration: "0.2s",
            }}
        />, journalism: <Image
            src={Journalism}
            alt="Journalism"
            className={style.img}
            style={{
                filter: showItems ? "brightness(0%) saturate(100%)" : "none", transitionDuration: "0.2s",
            }}
        />, default: <Image
            src={Info}
            alt="Info"
            className={style.img}
            style={{
                filter: showItems ? "brightness(0%) saturate(100%)" : "none", transitionDuration: "0.2s",
            }}
        />,
    }

    const getIcon = (icon) => {
        if (icons.hasOwnProperty(icon)) {
            return icons[icon]
        }

        return icons.default
    }

    return (<div className={style.blok}>
            <div className={style.row}>
                <div className={style.bloksmall}>
                    {getIcon(category.icon)}
                    <h2 className={style.h2}>{category.name}</h2>
                </div>
                <Image
                    src={ArrowDown}
                    onClick={() => setShowItems(!showItems)}
                    style={{
                        transform: showItems ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease",
                    }}
                    alt=""
                />
            </div>
            {showItems && (<div className={style.bloktext}>
                    {category.subcategories.map(subcategory => (
                        <a key={subcategory.id} href={'/services/' + subcategory.slug}>
                            <p className={style.text}>{subcategory.name}</p>
                        </a>))}
                </div>)}
        </div>);
};

