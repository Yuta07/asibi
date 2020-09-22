import Link from 'next/link';
import styled, { css } from 'styled-components';

type Props = {
  data: {
    image: string;
    title: string;
    theme: string;
    description: string;
    link: string;
  };
};

export const Card = ({ data }: Props) => {
  const { image, title, theme, description, link } = data;

  return (
    <Link href={link}>
      <Container theme={theme}>
        <Content>
          <Img src={image} alt={`${title}-image`} />
          <Bottom>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Bottom>
        </Content>
      </Container>
    </Link>
  );
};

const Container = styled.div<{ theme: string }>`
  ${({ theme }) => {
    return css`
      color: #ffffff;
      background: ${theme};
      cursor: pointer;

      &:hover {
        background: #282c35;
        transition: 0.3s;

        img {
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
        }
      }
    `;
  }}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;

  @media (max-width: 575.98px) {
    height: 100vw;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  object-fit: cover;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 30px;
  width: calc(100% - 30px);
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ffffff;
`;
