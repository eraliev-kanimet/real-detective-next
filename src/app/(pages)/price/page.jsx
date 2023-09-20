import fetchContent from "@/app/services/fetch";
import Layout from "@/app/components/Layout";
import Content from "./content";

const props = await fetchContent('about')

function CatalogPrice() {
    return (
        <Layout properties={props.properties} categories={props.categories}>
            <Content categories={props.categories}/>
        </Layout>
    );
}

export default CatalogPrice;
