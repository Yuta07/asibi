import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export const HomeTemplate = () => {
  return (
    <Wrapper>
      <Main>
        <PhotoContainer>
          <Photo src="/photo.svg" alt="photo" />
        </PhotoContainer>
        <IntroContainer>
          <Introduction>Hi, I'm Yutaka Miyazaki.</Introduction>
          <Text>I'm a Frontend Engineer from Japan.</Text>
          <Link href="/portfolio">
            <Button>
              <Portfolio>See Portfolio</Portfolio>
            </Button>
          </Link>
        </IntroContainer>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 940px;
  height: calc(100vh - 240px);
  margin: 40px auto 90px;
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    width: 700px;
  }

  @media (max-width: 425px) {
    width: 360px;
    height: calc(100vh - 170px);
    margin: 30px auto;
    justify-content: center;
  }

  @media (max-width: 374px) {
    width: 300px;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const PhotoContainer = styled.div``;

const Photo = styled.img`
  width: 300px;
  margin: 0 50px 0 30px;

  @media (max-width: 960px) {
    width: 240px;
  }

  @media (max-width: 425px) {
    width: 200px;
  }

  @media (max-width: 374px) {
    width: 180px;
  }
`;

const IntroContainer = styled.div`
  padding: 0 20px;
  line-height: 1.8;

  @media (max-width: 425px) {
    margin-top: 40px;
  }
`;

const Introduction = styled.h1`
  font-size: 28px;

  @media (max-width: 960px) {
    font-size: 24px;
  }

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  font-size: 16px;

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

const Button = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Portfolio = styled.a`
  font-size: 1.2rem;
  border: 2px solid #222f3e;
  border-radius: 40px;
  padding: 6px 32px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    color: #01a3a4;
    border-color: #01a3a4;
    transition: 0.2s;
  }

  @media (max-width: 425px) {
    font-size: 16px;
    padding: 4px 24px;
  }
`;
