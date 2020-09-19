import React from 'react';
import styled, { css } from 'styled-components';

export const Greeting = () => {
  return <Name path="/root/intro_back.jpg">Yutaka Miyazaki</Name>;
};

const Name = styled.h1<{ path: string }>`
  ${({ path }) => {
    return css`
      font-size: 85px;
      line-height: 1.3;
      background: url(${path}) no-repeat;
      background-size: cover;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (max-width: 1199.98px) {
        font-size: 70px;
      }
    `;
  }}
`;
