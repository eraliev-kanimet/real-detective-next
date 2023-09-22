import {useState} from 'react';
import style from "../navbar.module.scss";
import Vectordown from "../../../../../public/vectordown.svg";
import Categories from "./categories.jsx";
import Image from "next/image";

const Category = ({categories, name}) => {
    const [showModal, setShowModal] = useState(false);

    const handleModalClick = () => {
        setShowModal(!showModal);
    };

    if (categories.length) {
        return (
            <>
                <li className={style.liservices} onClick={handleModalClick}>
                    { name }
                    <div className={style.vector}>
                        <Image
                            src={Vectordown}
                            alt="Vectordown"
                            style={{
                                transform: showModal ? "rotate(0deg)" : "rotate(180deg)",
                                transition: "transform 0.3s ease",
                            }}
                            className={style.vector}
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
