import React, {useState} from 'react';
import style from "./categories.module.scss";
import Info from "../../../../../public/services-chat.svg";
import Family from "../../../../../public/services-family.svg";
import Binoculars from "../../../../../public/services-binoculars.svg";
import Search from "../../../../../public/services-search.svg";
import Protect from "../../../../../public/services-protect.svg";
import Journalism from "../../../../../public/services-journalism.svg";
import Image from "next/image";

const Subcategories = ({category}) => {
    const icons = {
        info: Info,
        family: Family,
        binoculars: Binoculars,
        search: Search,
        protect: Protect,
        journalism: Journalism,
        default: Info,
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

    return (
        <section>
            <Image
                src={getIcon(category.icon)}
                alt=""
            />
            <h2 className={style.h2}>{category.name}</h2>
            {category.subcategories.slice(0, visibleItems).map(item => (
                <a key={item.id} href={'/services/' + item.slug}>
                    <p className={style.text}>{item.name}</p>
                </a>
            ))}
            {visibleItems < category.subcategories.length ? (
                <button className={style.button} onClick={showMoreItems}>
                    Ещё {category.subcategories.slice(5).length}
                </button>
            ) : (
                category.subcategories.length > 5 ? (
                    <button className={style.button} onClick={() => setVisibleItems(5)}>Скрыть</button>
                ) : null
            )}
        </section>
    );
};

export default Subcategories;
