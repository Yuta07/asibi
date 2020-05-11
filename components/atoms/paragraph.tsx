import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

export const Paragraph = ({ text }: Props) => {
  return <Txt>{text}</Txt>;
};

const Txt = styled.p`
  color: #7f8c8d;
  font-size: 14px;
  line-height: 1.8;
  text-align: left;
  letter-spacing: 0.2px;
  margin-top: 30px;
`;
