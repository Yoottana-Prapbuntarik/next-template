import { useRouter } from 'next/router'
import MainLayout from '../../layouts/MainLayout'
import Head from "next/head";
const productType = () => {
    const router = useRouter();

    return (
        <MainLayout className="min-vh-100">
            <Head>
                <title>
                    {router.query.slug}
                </title>
            </Head>
                this is {router.query.slug}
        </MainLayout>
    );
};

export default productType;