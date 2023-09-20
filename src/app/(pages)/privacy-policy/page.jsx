import fetchContent from "@/app/services/fetch";
import Layout from "@/app/components/Layout";
import parse from "html-react-parser";
import '../cookies-policy/cookie.scss'

const props = await fetchContent('privacy_policy')

export default async function Page() {
    return (
        <Layout
            properties={props.properties}
            categories={props.categories}
        >
            <div className="container">
                {parse(props.content.privacy_policy)}
            </div>
        </Layout>
    );
}