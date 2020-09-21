import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Date } from '../../components/atoms/Date';
import { getAllPostIds, getPostData } from '../../lib/posts';

type Props = {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
};

const Post = ({ postData }: Props) => {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
};

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

export default Post;
