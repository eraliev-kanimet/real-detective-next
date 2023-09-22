"use client"

import {useState} from "react";
import Image from "next/image";
import hasAnyValueRecursive from "@/helpers/hasAnyValueRecursive";
import style from "@/app/(pages)/blog/[slug]/articlepage.module.scss";
import VectorUp from "../../../../../../public/article-icon.svg";

const ArticleHeaders = ({article_content}) => {
    const [showItems, setShowItems] = useState(false);

    const handleItemClick = () => {
        setShowItems(!showItems);
    };

    const scrollToSection = (sectionId, e) => {
        e.stopPropagation()
        document.getElementById(sectionId)
            .scrollIntoView({behavior: "smooth", block: 'center', inline: 'nearest'});
    };

    return (
        <>
            {hasAnyValueRecursive(article_content, ['text_with_headers_type_1', 'text_with_headers_type_2', 'text_with_headers_type_3']) ? (
                <div className={style.blok}>
                    <div className={style.row}>
                        <h3 className={style.h3}>Содержание</h3>
                        <Image
                            src={VectorUp}
                            alt="VectorUp"
                            className={style.large_icon}
                            onClick={handleItemClick}
                            style={{
                                transform: showItems ? "rotate(0deg)" : "rotate(180deg)",
                                transition: "transform 0.3s ease",
                            }}
                        />
                    </div>
                    {showItems && (
                        <ol className={style.bloktext}>
                            {article_content.map((content, index) => {
                                if (['text_with_headers_type_1'].includes(content.type)) {
                                    return (
                                        <li
                                            key={index}
                                            onClick={(e) => scrollToSection('title' + index, e)}
                                        >{content.data.header}</li>
                                    )
                                }

                                if (['text_with_headers_type_2', 'text_with_headers_type_3'].includes(content.type)) {
                                    return (
                                        <li
                                            key={index}
                                            onClick={(e) => scrollToSection('title' + index, e)}
                                        >
                                            <div style={{marginBottom: '8px'}}>{content.data.header}</div>
                                            <ol className={style.bloktext}>
                                                {content.data.items.map((item, index2) => (
                                                    <li
                                                        key={index2}
                                                        onClick={(e) => scrollToSection(index2 + 'subtitle' + index, e)}
                                                    >{item.header}</li>
                                                ))}
                                            </ol>
                                        </li>
                                    )
                                }
                            })}
                        </ol>
                    )}
                </div>
            ) : ''}
        </>
    );
};

export default ArticleHeaders;