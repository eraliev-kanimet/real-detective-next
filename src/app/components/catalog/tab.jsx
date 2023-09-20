import React from 'react';
import style from "../../(pages)/price/price.module.scss";
import Image from "next/image";
import Person from "../../../../public/dashicons_businessman.svg";
import Business from "../../../../public/dashbusiness-center.svg";

const CategoryTab = ({current, category, categoryName, onClick}) => {
    return (
        <div
            onClick={onClick}
            className={
                current === category ? [
                    style.tabs__category, style.active
                ].join(' ') : style.tabs__category
            }>
            {category === 'private_person' ? (
                <Image src={Person} alt="person" className={style.icon}/>
            ) : (
                <Image src={Business} alt="small suitcase" className={style.icon}/>
            )}
            {categoryName}
        </div>
    );
};

export default CategoryTab;
