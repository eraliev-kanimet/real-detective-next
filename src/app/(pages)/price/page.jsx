import fetchContent from "@/services/fetch";
import Layout from "@/app/components/Layout";
import Content from "./content";

const props = await fetchContent('price')

function CatalogPrice() {
    return (
        <Layout properties={props.properties} categories={props.categories}>
            <Content categories={props.categories} text={props.content.price}/>
        </Layout>
    );
}

export default CatalogPrice;
