import React from 'react';
import styled from 'styled-components';

export const NinoTemplate = () => {
  return (
    <Wrapper>
      <Container>
        <Img src="/portfolio/nino.svg" alt="nino-ui" />
        <Span>April 2020 - Present</Span>
        <Title>nino-ui</Title>
        <Text>Reactで作成されたStorybook. デザインはFlat UIを参考にしました。</Text>
        <Anchor href="https://nino-ui.netlify.app/">nino-ui Storybook URL - Netlify</Anchor>
        <Span>React / TypeScript / Netlify / Circle CI</Span>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 940px;
  height: calc(100vh - 230px);
  margin: 60px auto;
  display: flex;

  @media (max-width: 960px) {
    width: 700px;
  }

  @media (max-width: 425px) {
    width: 90%;
    height: calc(100vh - 200px);
    margin: 60px auto 30px;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 360px;
  margin: 0 auto;

  @media (max-width: 374px) {
    width: 320px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Span = styled.span`
  color: #7f8c8d;
  font-size: 14px;
  margin-top: 15px;
  display: block;
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 22px;
`;

const Text = styled.p`
  font-size: 14px;
  letter-spacing: 0.2px;
  margin: 20px 0 10px;
`;

const Anchor = styled.a`
  color: #01a3a4;
  text-decoration: none;

  &:hover {
    transition: 0.3s;
    opacity: 0.7;
  }
`;
