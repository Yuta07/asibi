import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Date } from '../../components/atoms/Date';
import { getAllPostIds, getPostData } from '../../lib/posts';

type Props = {
  postData: {
    title: string;
    date: string;
    content: string;
  };
};

type Code = {
  language: string;
  value: string;
};

export const config = { amp: true };

const CodeBlock = ({ language, value }: Code) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default function Post({ postData }: Props) {
  console.log(postData);
  return (
    <Article>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown escapeHtml={false} source={postData.content} renderers={{ code: CodeBlock }} />
      </article>
    </Article>
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

const Article = styled.article`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;
`;
