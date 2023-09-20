import style from "./not-found.module.scss";
import Link from "next/link";
import Image from "next/image";
import VectorRight from "../../public/vectorright.svg";
import NoMatch from "../../public/nomatch-404.png";
import Layout from "@/app/components/Layout";
import fetchContent from "@/app/services/fetch";

const props = await fetchContent('not_found')

export default function NoModule() {
    return (
        <Layout properties={props.properties} categories={props.properties}>
            <main className={style.container}>
                <div className={style.blok_nomatch}>
                    <h1 className={style.h1}>404. Страница не найдена</h1>
                    <p className={style.p}>
                        Возможно, она была перемещена, или вы просто
                        <br/> неверно указали адрес страницы.
                    </p>
                    <Link href="/">
                        <button className={style.button_nomatch} type="button">
                            Перейти на главную
                            <Image src={VectorRight} alt="vector" className={style.icon_nomatch}/>
                        </button>
                    </Link>
                </div>
                <Image src={NoMatch} alt="404_page" className={style.img_nomatch}/>
            </main>
        </Layout>
    );
}