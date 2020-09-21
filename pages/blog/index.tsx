import { GetStaticProps } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { Date } from '../../components/atoms/Date';
import { getSortedPostsData } from '../../lib/posts';

type Post = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

export default function Blog({ allPostsData }: Post) {
  return (
    <div>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map((data) => (
            <li key={data.id}>
              <Link href={`/blog/${data.id}`}>
                <a>{data.title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={data.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
