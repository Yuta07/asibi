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
`;
