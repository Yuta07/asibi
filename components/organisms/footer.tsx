import React from 'react';
import styled from 'styled-components';
import { RelatedLink } from '../molecules/relatedLink';

export const Footer = () => {
  return (
    <Wrapper>
      <CopyRight>
        © {new Date().getFullYear()},
        <Link href="https://github.com/Yuta07" target="_blank">
          Yutaka Miyazaki
        </Link>
        - All rights reserved.
      </CopyRight>
      <RelatedLink />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 90%;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CopyRight = styled.p`
  font-size: 14px;
`;

const Link = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: #01a3a4;
  font-weight: 550;

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;
