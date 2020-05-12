import React from 'react';
import styled from 'styled-components';
import { PortfolioType } from '../../types';

export const PortfolioCard = (portfolio: PortfolioType) => {
  return (
    <Card>
      <Img src={portfolio.image} alt={portfolio.title} />
      <Span>{portfolio.category}</Span>
      <TextBold>{portfolio.title}</TextBold>
      <Text>{portfolio.overview}</Text>
    </Card>
  );
};

const Card = styled.div`
  width: 33.33%;
  height: 100%;
  padding: 0 15px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  padding-bottom: 10px;
  border-bottom: 3px solid #01a3a4;
  background: #f9f9f9;
  object-fit: contain;
`;

const Span = styled.span`
  display: block;
  color: #7f8c8d;
  font-size: 12px;
  margin-top: 10px;
`;

const TextBold = styled.h2`
  font-size: 18px;
`;

const Text = styled.p`
  color: #7f8c8d;
  font-size: 14px;
  margin-top: 5px;
`;
