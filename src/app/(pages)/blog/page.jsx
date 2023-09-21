import style from "./blogpage.module.scss";
import fetchContent from "@/app/services/fetch";
import Layout from "@/app/components/Layout";
import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import Content from "@/app/(pages)/blog/content";

const props = await fetchContent('blog')

export default function BlogPage() {
  return (
    <Layout properties={props.properties} categories={props.categories}>
        <main className={style.page_container}>
            <section className={style.page_header}>
                <Breadcrumbs links={[{last: true, name: 'Блог'}]}/>
                <h3 className={style.page_title}>Блог</h3>
            </section>
            <Content/>
        </main>
    </Layout>
  );
}
