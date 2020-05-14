import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Heading } from '../../atoms/heading';
import { PortfolioCard } from '../../organisms/portfolioCard';
import { portfolios } from '../../../types';

export const PortfolioTemplate = () => {
  return (
    <Wrapper>
      <Hero>
        <Heading text="PORTFOLIO" />
      </Hero>
      <Container>
        {portfolios.map(portfolio => (
          <Fragment key={portfolio.title}>{PortfolioCard(portfolio)}</Fragment>
        ))}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 940px;
  margin: 40px auto 90px;

  @media (max-width: 960px) {
    width: 700px;
  }

  @media (max-width: 425px) {
    width: 90%;
    margin: 40px auto 60px;
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 30px 0 60px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
