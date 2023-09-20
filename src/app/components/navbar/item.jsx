import React from 'react';
import style from "./navbar.module.scss";
import Vectorright from "../../../../public/bxs_chevron-right.svg";
import Image from "next/image";

const Item = ({url, name, classes}) => {
    return (
        <a href={url}>
            <li
                className={classes ? classes : style.li}
            >
                {name + " "}
                <div className={style.right}>
                    <Image
                        src={Vectorright}
                        alt="Vectorright"
                        className={style.right}
                    />
                </div>
            </li>
        </a>
    );
};

export default Item;
