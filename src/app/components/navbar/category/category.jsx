import {useState} from 'react';
import style from "./category.module.scss";
import Vectordown from "@/../public/vectordown.svg";
import Categories from "../categories/categories.jsx";
import Image from "next/image";

const Category = ({categories, name}) => {
    const [showModal, setShowModal] = useState(false);

    const handleModalClick = () => {
        setShowModal(!showModal);
    };

    if (categories.length) {
        return (
            <>
                <li className={style.service} onClick={handleModalClick}>
                    {name}
                    <div className={style.vector}>
                        <Image
                            src={Vectordown}
                            alt="Vectordown"
                            style={{
                                transform: showModal ? "rotate(0deg)" : "rotate(180deg)",
                            }}
                        />
                    </div>
                </li>

                {showModal && <Categories categories={categories}/>}
            </>
        );
    }

    return (<></>);
};

export default Category;
