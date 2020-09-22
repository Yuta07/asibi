import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown/with-html';
import { Date } from '../../components/atoms/Date';
import { getAllPostIds, getPostData } from '../../lib/posts';

type Props = {
  postData: {
    title: string;
    date: string;
    spoiler: string;
    id: string;
    content: string;
  };
};

export const config = { amp: true };

export default function Post({ postData }: Props) {
  return (
    <article className="">
      <Head>
        <title>{`${postData.title} | Yutaka Miyazaki`}</title>
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.spoiler} />
        <meta property="og:url" content={`https://yutazon.me/blog/${postData.id}`} />
        <meta property="og:type" content="article" />
      </Head>
      <header className="">
        <h1 className="">{postData.title}</h1>
        <div className="">
          <Date dateString={postData.date} />
        </div>
      </header>
      <main className="">
        <ReactMarkdown escapeHtml={false} source={postData.content} />
      </main>
    </article>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const postData = await getPostData(params.id as string);

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};
