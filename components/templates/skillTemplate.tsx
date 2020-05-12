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
  height: calc(100vh - 260px);
  margin: 40px auto 90px;
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 780px;
  margin: 50px auto 0;
`;
