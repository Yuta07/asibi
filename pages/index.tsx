import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Footer } from '../components/organisms/footer';

const Index = () => {
  return (
    <>
      <Main>
        <Introduction>Hi, It's Yutaka Miyazaki.</Introduction>
        <Text>I'm a Frontend Engineer from Japan.</Text>
        <Link href="/[slug]" as="/portfolio">
          <Portfolio>See Portfolio</Portfolio>
        </Link>
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.div`
  width: 90%;
  margin: 0 auto;
  line-height: 2;
`;

const Introduction = styled.h1`
  font-size: 2.5rem;
`;

const Text = styled.p`
  font-size: 1.3rem;
`;

const Portfolio = styled.a`
  display: inline-block;
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
