import React from 'react';
import styled from 'styled-components';
import { CopyRight } from '../atoms/copyRight';

export const Footer = () => {
  return (
    <Wrapper>
      <CopyRight />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
