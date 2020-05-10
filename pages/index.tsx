import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Index = () => {
  return (
    <Wrapper>
      <Main>
        <Introduction>Hi, It's Yutaka Miyazaki.</Introduction>
        <Text>I'm a Frontend Engineer from Japan.</Text>
        <Link href="/portfolio">
          <Button>
            <Portfolio>See Portfolio</Portfolio>
          </Button>
        </Link>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Main = styled.div`
  width: 50%;
  max-width: 480px;
  line-height: 2;
`;

const Introduction = styled.h1`
  font-size: 2.3rem;
`;

const Text = styled.p`
  font-size: 1.3rem;
`;

const Button = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Portfolio = styled.a`
  font-size: 1.3rem;
  border: 3px solid #222f3e;
  border-radius: 40px;
  padding: 8px 40px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    color: #01a3a4;
    border-color: #01a3a4;
    transition: 0.2s;
  }
`;

export default Index;
