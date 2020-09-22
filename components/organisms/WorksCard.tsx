import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  data: {
    image: string[];
    title: string;
    description: string;
    slug: string;
  };
};

export const WorksCard = ({ data }: Props) => {
  const { image, title, description, slug } = data;

  return (
    <Link href={`/works/${slug}`}>
      <Content>
        <Img src={image[0]} alt={`${title}-image`} />
        <Caveat className="porfolio-description">
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Caveat>
      </Content>
    </Link>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  cursor: pointer;

  &:hover {
    img {
      filter: drop-shadow(0 1px 1px silver);
    }

    .porfolio-description {
      filter: opacity(80%);
    }
  }

  @media (max-width: 575.98px) {
    min-width: 300px;
  }
`;

const Img = styled.img`
  width: 220px;
  height: 200px;
  margin: 0 auto;
  object-fit: cover;
  background: #ffffff;
  border-radius: 8px;
  filter: grayscale(0) blur(0) drop-shadow(0 4px 4px silver);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

const Caveat = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: #ffffff;
  border-radius: 8px;
  filter: opacity(0%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 350;
  margin-top: 4px;
`;
