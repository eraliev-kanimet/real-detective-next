import style from "./category.module.scss";
import Vectorright from "@/../public/bxs_chevron-right.svg";
import Image from "next/image";

const Item = ({url, name, mobile}) => {
    return (
        <a href={url}>
            <li
                className={mobile ? [style.li, style.limob].join(' ') : style.li}
            >
                {name}
                <div className={style.right}>
                    <Image src={Vectorright} alt="Vectorright"/>
                </div>
            </li>
        </a>
    );
};

export default Item;
