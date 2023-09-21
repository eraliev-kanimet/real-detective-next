import style from "./reviews.module.scss";
import Arrow from "../../../../public/vectorright.svg";
import Image from "next/image";
import fetchContent from "@/app/services/fetch";
import Layout from "@/app/components/Layout";
import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import Content from "@/app/(pages)/reviews/content";

const props = await fetchContent('reviews')

export default function Reviews() {
    return (
        <Layout properties={props.properties} categories={props.categories}>
            <div className={style.page_container}>
                <section className={style.page_header}>
                    <Breadcrumbs links={[{last: true, name: 'Отзывы'}]}/>
                    <h3 className={style.page_title}>
                        отзывы о компании pershin & partners
                    </h3>
                    <a
                        href={props.properties.reviews2}
                        target="_blank"
                        rel="noreferrer"
                        className={style.page_link}
                    >
                        Оставить отзыв
                        <Image src={Arrow} alt="отзыв"/>
                    </a>
                </section>
                <Content/>
            </div>
        </Layout>
    );
}