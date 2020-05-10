import React from 'react';
import styled from 'styled-components';
import { Heading } from '../atoms/heading';

export const About = () => {
  return (
    <Wrapper>
      <Hero>
        <Heading text="SKILLS" />
      </Hero>
      <Container>
        <h1>about</h1>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  height: 100%;
  margin: 20px 0;
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 780px;
  margin: 50px auto 0;
`;
