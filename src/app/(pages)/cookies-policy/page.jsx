import fetchContent from "@/services/fetch";
import Layout from "@/app/components/Layout";
import parse from "html-react-parser";
import './cookie.scss'

const props = await fetchContent('cookies_policy')

export default async function Page() {
    return (
        <Layout
            properties={props.properties}
            categories={props.categories}
        >
            <div className="container">
                {parse(props.content.cookies_policy)}
            </div>
        </Layout>
    );
}