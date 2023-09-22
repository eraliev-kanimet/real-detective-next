import {useState} from "react";
import Image from "next/image";
import style from "./categories.module.scss";
import {Scrollbar} from "react-scrollbars-custom";
import Info from "../../../../../public/services-chat.svg";
import Family from "../../../../../public/services-family.svg";
import Binoculars from "../../../../../public/services-binoculars.svg";
import Search from "../../../../../public/services-search.svg";
import Protect from "../../../../../public/services-protect.svg";
import Journalism from "../../../../../public/services-journalism.svg";

export default function Categories({categories}) {
    return (
        <div className={style.catalog}>
            <div>
                <div className={style.catalog_inner}>
                    <Scrollbar
                        style={{
                            width: "93vw",
                            height: "33vw",
                        }}
                    >
                        <div className={style.catalog_inner2}>
                            {categories.map(category => (
                                <Subcategories key={category.id} name={category.name} icon={category.icon} items={category.subcategories}/>
                            ))}
                        </div>
                    </Scrollbar>
                </div>
            </div>
        </div>
    );
}

const Subcategories = ({icon, name, items}) => {
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
                src={getIcon(icon)}
                alt=""
            />
            <h2 className={style.h2}>{name}</h2>
            {items.slice(0, visibleItems).map(item => (
                <a key={item.id} href={'/services/' + item.slug}>
                    <p className={style.text}>{item.name}</p>
                </a>
            ))}
            {visibleItems < items.length ? (
                <button className={style.button} onClick={showMoreItems}>
                    Ещё {items.slice(5).length}
                </button>
            ) : (
                items.length > 5 ? (
                    <button className={style.button} onClick={() => setVisibleItems(5)}>Скрыть</button>
                ) : null
            )}
        </section>
    );
};