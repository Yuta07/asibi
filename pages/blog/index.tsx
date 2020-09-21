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
    <Container>
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
    </Container>
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

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
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
  height: 90px;
  width: 90px;
  margin-right: 30px;
  background: #353942;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const Description = styled.div``;

const Heading = styled.h3`
  cursor: pointer;
`;

const Anchor = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: #3fb0ac;
`;

const Spoiler = styled.p`
  font-size: 16px;
  margin-top: 4px;
`;
