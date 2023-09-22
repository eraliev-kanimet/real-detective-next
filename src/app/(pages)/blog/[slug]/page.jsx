import style from "./articlepage.module.scss";
import Image from "next/image";
import Layout from "@/app/components/Layout";
import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import fetchContent from "@/app/services/fetch";
import Blog from "@/app/components/home/blog/blog";
import Eye from "../../../../../public/article-eye.svg";
import Fire from "../../../../../public/article-fire.svg";
import Car from "../../../../../public/article-car.svg";
import Cat from "../../../../../public/article-cat.svg";
import Quote from "../../../../../public/article-quote.svg";
import Info from "../../../../../public/article-info.svg";
import ArticleHeaders from "@/app/(pages)/blog/[slug]/components/article-headers"
import Carousel from "@/app/(pages)/blog/[slug]/components/carousel/carousel";
import FaqItem from "@/app/components/faq/faq-item";
import "@/app/components/faq/faq.scss";
import Views from "@/app/(pages)/blog/[slug]/components/views";
import LikeOrDislike from "@/app/(pages)/blog/[slug]/components/like-or-dislike";
import notFound from "@/app/not-found";

export default async function Page({params}) {
    const {categories, properties, articles, article} = await fetchContent('article', params.slug)

    const icons = {
        fire: Fire,
        car: Car,
        cat: Cat,
        default: Cat,
    }

    const getIcons = (name) => {
        return icons[name] ?? icons.default
    }

    if (article) {
        return (
            <Layout properties={properties} categories={categories}>
                <div className={style.container}>
                    <section className={style.section_header}>
                        <Breadcrumbs links={[{url: '/blog', name: 'Блог'}, {last: true, name: article.name}]}/>
                        <img src={article.image} alt="article main" className={style.image}/>
                        <div className={style.container_time}>
                            <div className={style.blok_time}>
                                <p className={style.time}>Читать {article.read_time} минут</p>
                                <Image src={Eye} alt="eye"/>
                                <Views init={article.views} rating={article.rating}/>
                            </div>
                            <p className={style.time}>{article.date}</p>
                        </div>
                        <h1 className={style.h1}>{article.name}</h1>
                        <p className={style.text}>{article.description}</p>
                        <ArticleHeaders article_content={article.content ?? []}/>
                    </section>

                    {article.content.map((content, index) => {
                        if (content.type === 'text') {
                            return (
                                <section key={index} className={style.section_titletext}>
                                    <p className={style.text}>{content.data.content}</p>
                                </section>
                            )
                        }

                        if (content.type === 'text_with_headers_type_1') {
                            return (
                                <section key={index} className={style.section_titletext}>
                                    <h2 className={style.h2} id={'title' + index}>{content.data.header}</h2>
                                    {content.data.items.map((item, index2) => {
                                        if (item.type === 'text') {
                                            return (
                                                <div key={index2} className={style.blok_titletext}>
                                                    <p className={style.text}>{item.data.content}</p>
                                                </div>
                                            )
                                        }

                                        if (item.type === 'subheader') {
                                            return (
                                                <div key={index2} className={style.blok_titletext}>
                                                    <h3 className={style.h3} id={index2 + 'subtitle' + index}>
                                                        {item.data.header}
                                                    </h3>
                                                    <p className={style.text}>{item.data.text}</p>
                                                </div>
                                            )
                                        }
                                    })}
                                </section>
                            )
                        }

                        if (content.type === 'text_with_headers_type_2') {
                            return (
                                <section key={index} className={style.section_tablesvg}>
                                    <h2 className={style.h2} id={'title' + index}>{content.data.header}</h2>
                                    <div className={style.about}>
                                        {content.data.items.map((item, index3) => (
                                            <div key={index3} className={style.blokabout}>
                                                <Image src={getIcons(item.icon)} alt="Icon" className={style.img}/>
                                                <h3 className={style.title}
                                                    id={index3 + 'subtitle' + index}>{item.header}</h3>
                                                <p className={style.smalltext}>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )
                        }

                        if (content.type === 'text_with_headers_type_3') {
                            return (
                                <section key={index} className={style.section_titletext}>
                                    <h2 className={style.h2} id={'title' + index}>{content.data.header}</h2>
                                    <div className={style.numbers}>
                                        {content.data.items.map((item, index4) => (
                                            <div key={index4} className={style.blok_numbers}>
                                                <p className={style.number}>{index4 + 1}</p>
                                                <h3 className={style.title_numbers} id={index4 + 'subtitle' + index}>
                                                    {item.header}
                                                </h3>
                                                <p className={style.smalltext_numbers}>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )
                        }

                        if (content.type === 'quote') {
                            return (
                                <section key={index} className={style.section_quote}>
                                    <Image src={Quote} alt="Quote" className={style.img}/>
                                    <div className={style.blok_quote}>
                                        <p className={style.text}>{content.data.text}</p>
                                        <div className={style.blokdirector}>
                                            <img
                                                className={style.img64}
                                                src={process.env.NEXT_PUBLIC_APP_API_URL + '/storage/' + content.data.author.image}
                                                alt="director"
                                            />
                                            <p className={style.text}>
                                                {content.data.author.name}
                                                <br/>
                                                <span className={style.textdirector}>{content.data.author.post}</span>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            )
                        }

                        if (content.type === 'quote2') {
                            return (
                                <section key={index} className={style.section_gray}>
                                    <Image src={Quote} alt="Quote" className={style.img}/>
                                    <p className={style.text}>{content.data.text}</p>
                                </section>
                            )
                        }

                        if (content.type === 'info') {
                            return (
                                <section key={index} className={style.section_gray}>
                                    <Image src={Info} alt="Info" className={style.img}/>
                                    <p className={style.text}>{content.data.text}</p>
                                </section>
                            )
                        }

                        if (content.type === 'image') {
                            return (
                                <section key={index} className={style.section_titletext}>
                                    {content.data.header ? (
                                        <h2 className={style.h2}>{content.data.header}</h2>
                                    ) : ''}
                                    {content.data.images.length === 1 ? (
                                        <div className={style.blok_titletext}>
                                            <img
                                                src={process.env.NEXT_PUBLIC_APP_API_URL + '/storage/' + content.data.images[0].image}
                                                alt={content.data.images[0].alt}
                                                className={style.image}
                                            />
                                            <p className={style.text}>{content.data.text}</p>
                                        </div>
                                    ) : <Carousel>{
                                        content.data.images.map(image => (
                                            <img
                                                key={image.image}
                                                src={process.env.NEXT_PUBLIC_APP_API_URL + '/storage/' + image.image}
                                                alt={image.alt}
                                                className={style.imageslider}
                                            />
                                        ))
                                    }</Carousel>}
                                </section>
                            )
                        }
                    })}

                    <section className={style.section_question}>
                        <h2 className={style.h2}>Ответы на популярные вопросы</h2>
                        {article.faq.map((item, index) => <FaqItem key={index} content={item}/>)}
                    </section>

                    <section className={style.section_autor}>
                        <img className={style.img64} src={article.author.image} alt="director"/>
                        <p className={style.textautor}>
                            Автор статьи
                            <br/>
                            <span className={style.textautordirector}>{article.author.name}</span>
                        </p>
                    </section>
                    <LikeOrDislike article_id={article.id} rating_id={article.rating} initLikes={article.likes} initDislikes={article.dislikes}/>
                </div>
                <div>
                    <Blog viewAll={false} header='Читайте также' articles={articles ?? []}/>
                </div>
            </Layout>
        );
    }

    return notFound({categories, properties})
}
