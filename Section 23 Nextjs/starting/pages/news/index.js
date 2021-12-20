import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">NextJS Is A Great Framework</Link>
        </li>
        <li>Something else</li>
      </ul>
    </>
  );
};

export default NewsPage;
