import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  data: {
    image: string;
    title: string;
    description: string;
    link: string;
  };
};

export const WorksCard = ({ data }: Props) => {
  const { image, title, description, link } = data;

  return (
    <Link href={link}>
      <Content>
        <Img src={image} alt={`${title}-image`} />
        <Bottom className="porfolio-description">
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Bottom>
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
      filter: grayscale(40%) blur(1px);
    }

    .porfolio-description {
      filter: opacity(100%);
    }
  }
`;

const Img = styled.img`
  width: 280px;
  height: 240px;
  margin: 0 auto;
  object-fit: cover;
  background: #ffffff;
  border-radius: 8px;
  filter: grayscale(0) blur(0) drop-shadow(0 4px 4px silver);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  filter: opacity(0%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 5px;
  padding-top: 5px;
  border-top: 1px solid #353b48;
`;
