import React from 'react';
import styled from 'styled-components';
import { CopyRight } from '../atoms/copyRight';
import { RelatedLink } from '../atoms/relatedLink';

export const Footer = () => {
  return (
    <Wrapper>
      <CopyRight />
      <RelatedLink />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
