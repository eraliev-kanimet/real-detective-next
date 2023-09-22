import fetchContent from "@/services/fetch";
import Layout from "@/app/components/Layout";
import Content from "@/app/(pages)/services/content";

const props = await fetchContent('services')

function Catalog() {
    return (
        <Layout properties={props.properties} categories={props.categories}>
            <Content categories={props.categories}/>
        </Layout>
    );
}

export default Catalog;

