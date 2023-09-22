import fetchContent from "@/services/fetch";
import Layout from "@/app/components/Layout";
import FAQ from "@/app/components/faq/faq";

const props = await fetchContent('faq')

export default async function Faq() {
    return (
        <Layout
            properties={props.properties}
            categories={props.categories}
        >
            <FAQ faq={props.content?.faq?.faq ?? []} content={props.content.block3}/>
        </Layout>
    );
}