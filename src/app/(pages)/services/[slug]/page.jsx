import style from "./service.module.scss";
import Image from "next/image";
import Play from "@/../public/play.svg";
import Binoculars from "@/../public/services-binoculars.svg";
import FAQ from "@/app/components/faq/faq";
import fetchContent from "@/services/fetch";
import Layout from "@/app/components/Layout";
import parse from "html-react-parser";
import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import Popup from "@/app/(pages)/services/[slug]/popup";
import Blog from "@/app/components/home/blog/blog";
import notFound from '../../../not-found'

export default async function Page({params}) {
    const {categories, properties, articles, service, content} = await fetchContent('service', params.slug)

    if (service) {
        return (
            <Layout properties={properties} categories={categories}>
                <main className={style.container}>
                    <section className={style.section_header}>
                        <Breadcrumbs
                            links={[{url: '/services', name: 'Услуги'}, {last: true, name: service.name}]}
                        />
                        <h1 className={style.h1}>{service.basic.h1}</h1>
                        <div className={style.blok_header}>
                            <div className={style.blok_img}>
                                <img
                                    src={service.video.image}
                                    alt="geolocation"
                                    className={style.img}
                                />
                                <button className={style.play}>
                                    <a
                                        href={service.video.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Image src={Play} alt="play"/>
                                    </a>
                                </button>
                            </div>
                            <div className={style.blok_header_text}>
                                <p className={style.text_header}>{service.description}</p>
                                <div className={style.blok_price}>
                                    <div>
                                        <p className={style.text_aboutprice}>Минимальный депозит</p>
                                        <p className={style.text_price}>{service.minimum_advance_amount} руб</p>
                                    </div>
                                    <div>
                                        <p className={style.text_aboutprice}>Средний чек</p>
                                        <p className={style.text_price}>{service.average_receipt} руб</p>
                                    </div>
                                </div>
                                <Popup properties={properties} rating={service.rating} ratings={service.rating_array}/>
                            </div>
                        </div>
                    </section>

                    <section className={style.section_main}>
                        {service.content.map((content, index) => (
                            <div key={index} className={style.blok_main}>
                                {content.header ? (<h2 className={style.h2}>{content.header}</h2>) : ''}
                                {parse(content.content)}
                            </div>
                        ))}

                        <div className={style.blok_main2}>
                            <h2 className={style.h2}>Этапы нашей работы</h2>
                            <div className={style.about}>
                                {service.basic.steps_of_work.map((item, index) => (
                                    <div className={style.blok}>
                                        <p className={style.number}>{index + 1}</p>
                                        <p className={style.title}>{item.header}</p>
                                        <p className={style.smalltext}>{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {service.related.length ? (
                            <div className={style.blok_main}>
                                <h2 className={style.h2}>Похожие услуги</h2>
                                {service.related.map(related => (
                                    <a href={'/services/' + related.slug} key={related.id}>
                                        <div className={style.button_yet}>
                                            <div className={style.smallcontainer_yet}>
                                                <Image src={Binoculars} alt="Binoculars" className={style.iconbutton}/>
                                                <p className={style.button_text}>{related.name}</p>
                                            </div>
                                            <p className={style.button_price}>От {related.minimum_advance_amount} руб</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        ) : ''}
                    </section>
                    <FAQ faq={content.faq.faq ?? []} content={content.block3}/>
                    <Blog header='Блог' articles={articles ?? []}/>
                </main>
            </Layout>
        );
    }

    return notFound({categories, properties})
}
