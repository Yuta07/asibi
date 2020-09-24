import { GetStaticProps } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { Date } from '../../components/atoms/Date';
import { getSortedPostsData } from '../../lib/posts';

type Props = {
  allPostsData: {
    excerpt: string;
    date: string;
    title: string;
    spoiler: string;
    image: string;
    id: string;
  }[];
};

export default function Blog({ allPostsData }: Props) {
  return (
    <Content>
      {allPostsData.map((data) => (
        <Article key={data.id}>
          <ImgField>
            <Image src={data.image} alt={data.title} />
          </ImgField>
          <Description>
            <Link href={`/blog/${data.id}`}>
              <Heading>
                <Anchor>{data.title}</Anchor>
              </Heading>
            </Link>
            <Date dateString={data.date} />
            <Spoiler>{data.spoiler}</Spoiler>
          </Description>
        </Article>
      ))}
    </Content>
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Article = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &:not(:first-child) {
    margin-top: 50px;
  }
`;

const ImgField = styled.p`
  height: 80px;
  width: 80px;
  margin-right: 30px;
  background: #353942;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  filter: drop-shadow(0 4px 4px silver);

  @media (max-width: 575.98px) {
    height: 60px;
    width: 60px;
  }
`;

const Image = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;

  @media (max-width: 575.98px) {
    height: 40px;
    width: 40px;
  }
`;

const Description = styled.div``;

const Heading = styled.h3`
  cursor: pointer;
`;

const Anchor = styled.a`
  font-size: 22px;
  font-weight: 700;
  color: #3fb0ac;

  @media (max-width: 575.98px) {
    font-size: 18px;
  }
`;

const Spoiler = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;
