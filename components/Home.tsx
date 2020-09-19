import React from 'react';
import styled from 'styled-components';
import { Copyright } from './atoms/Copyright';
import { Greeting } from './atoms/Greeting';
import { Logo } from './atoms/Logo';
import { Card } from './organisms/Card';
import rootData from '../content/root.json';

export const Home = () => {
  return (
    <Content>
      <IntroContainer>
        <Introduction>
          <Top>
            <Logo />
          </Top>
          <Greeting />
          <Copyright />
        </Introduction>
      </IntroContainer>
      {rootData.data.map((data, i) => {
        return <Card key={data.title} data={data} index={i} />;
      })}
    </Content>
  );
};

const Content = styled.div`
  display: grid;
  grid-template-rows: 50vh 50vh;
  grid-template-columns: 33.3vw 33.3vw 33.3vw;
  grid-template-area: 'intro resume portfolio' 'intro blog contact';
`;

const IntroContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 10px;
  height: 100%;
  position: relative;
`;

const Top = styled.div`
  position: absolute;
  top: 20px;
`;
