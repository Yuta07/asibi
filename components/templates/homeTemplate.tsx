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
  height: calc(100vh - 260px);
  margin: 40px auto 90px;
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
`;

const PhotoContainer = styled.div``;

const Photo = styled.img`
  width: 300px;
  margin: 0 50px 0 30px;
`;

const IntroContainer = styled.div`
  padding: 0 20px;
  line-height: 1.8;
`;

const Introduction = styled.h1`
  font-size: 28px;
`;

const Text = styled.p`
  font-size: 16px;
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
`;
