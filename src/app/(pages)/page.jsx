import Layout from "@/app/components/Layout";
import MainBg from "@/app/components/home/main-bg/main-bg";
import About from "@/app/components/home/about/about";
import License from "@/app/components/home/license/license";
import Categories from "@/app/components/home/categories/categories";
import Videos from "@/app/components/home/videos/videos";
import FirstVisit from "@/app/components/home/first-visit/first-visit";
import Director from "@/app/components/home/director/director";
import Review from "@/app/components/home/review/review";
import Safety from "@/app/components/home/safety/safety";
import FAQ from "@/app/components/faq/faq";
import MapHome from "@/app/components/home/map/map";
import Blog from "@/app/components/home/blog/blog";
import fetchContent from "@/services/fetch";

const props = await fetchContent('home')

export default async function Main() {
    return (
        <Layout
            properties={props.properties}
            categories={props.categories}
        >
            <MainBg properties={props.properties}/>
            <About content={props.content.block1}/>
            <Categories categories={props.categories}/>
            <License/>
            <Videos videos={props.content.videos ?? []} properties={props.properties}/>
            <FirstVisit content={props.content.block2}/>
            <Director properties={props.properties} content={props.content.block3}/>
            <Review reviews={props.reviews} properties={props.properties}/>
            <Safety content={props.content.block4}/>
            <FAQ faq={props.content?.faq?.home ?? []} content={props.content.block3}/>
            <Blog header='Блог' articles={props.articles ?? []}/>
            <MapHome map={props.properties.map}/>
        </Layout>
    );
}
