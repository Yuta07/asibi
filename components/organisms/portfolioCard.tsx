import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { PortfolioType } from '../../types';

export const PortfolioCard = (portfolio: PortfolioType) => {
  return (
    <Link href={portfolio.link ? portfolio.link : '/portfolio'}>
      <Card link={!!portfolio.link}>
        <Img src={portfolio.image} alt={portfolio.title} />
        <Span>{portfolio.category}</Span>
        <TextBold>{portfolio.title}</TextBold>
        <Text>{portfolio.overview}</Text>
        {!!portfolio.link ? <LinkImg src="/portfolio/link.svg" alt="link" /> : null}
      </Card>
    </Link>
  );
};

const Card = styled.div<{ link: boolean }>`
  ${({ link }) => {
    return css`
      position: relative;
      width: 32.33%;
      height: 100%;
      padding: 0 10px;
      margin-top: 40px;
      margin-right: 1.5%;
      display: flex;
      flex-direction: column;
      cursor: ${link ? 'pointer' : 'default'};

      &:hover {
        ${link
          ? `
          transition: 0.3s;
          opacity:0.8;
        `
          : null}
      }

      &:nth-child(3) {
        margin-right: 0;
      }

      @media (max-width: 960px) {
        width: 50%;
        margin-right: 0;
      }

      @media (max-width: 425px) {
        width: 100%;
        margin-right: 0;
      }
    `;
  }}
`;

const Img = styled.img`
  width: 100%;
  height: 250px;
  padding-bottom: 10px;
  border-bottom: 3px solid #01a3a4;
  background: #f9f9f9;
  object-fit: cover;
`;

const Span = styled.span`
  display: block;
  color: #7f8c8d;
  font-size: 12px;
  margin-top: 10px;
`;

const TextBold = styled.h2`
  font-size: 18px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const Text = styled.p`
  color: #7f8c8d;
  font-size: 14px;
  margin-top: 5px;
`;

const LinkImg = styled.img`
  position: absolute;
  bottom: 13%;
  right: 8%;
`;
