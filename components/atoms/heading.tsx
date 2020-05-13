import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

export const Heading = ({ text }: Props) => {
  return <Text>{text}</Text>;
};

const Text = styled.h1`
  font-size: 1.6rem;
  display: inline-block;
  padding-bottom: 4px;
  border-bottom: 3px solid #01a3a4;

  @media (max-width: 960px) {
    font-size: 1.4rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;
