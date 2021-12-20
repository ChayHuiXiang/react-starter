import {useRouter} from 'next/router';

const DetailPage = () => {
    const router = useRouter();
    return <h1>{router.query.foo}'s page!</h1>;
}

export default DetailPage;