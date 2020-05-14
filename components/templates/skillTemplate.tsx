import React from 'react';
import styled from 'styled-components';
import { Heading } from '../atoms/heading';
import { SkillList } from '../organisms/skillList';

export const SkillTemplate = () => {
  return (
    <Wrapper>
      <Hero>
        <Heading text="SKILLS" />
      </Hero>
      <Container>
        <SkillList />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 940px;
  height: calc(100vh - 240px);
  margin: 40px auto 90px;

  @media (max-width: 960px) {
    width: 700px;
  }

  @media (max-width: 425px) {
    width: 90%;
    height: calc(100vh - 170px);
    margin: 40px auto;
    justify-content: center;
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 780px;
  margin: 50px auto 0;

  @media (max-width: 960px) {
    max-width: 700px;
    margin: 50px auto 0;
  }

  @media (max-width: 425px) {
    max-width: 360px;
    margin: 30px auto 0;
  }

  @media (max-width: 374px) {
    max-width: 300px;
    margin: 20px auto 0;
  }
`;
