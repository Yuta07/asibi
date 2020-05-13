import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

export const Paragraph = ({ text }: Props) => {
  return <Txt>{text}</Txt>;
};

const Txt = styled.p`
  font-size: 14px;
  line-height: 1.8;
  text-align: left;
  letter-spacing: 0.2px;
  margin-top: 30px;

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
