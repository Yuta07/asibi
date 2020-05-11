import React from 'react';
import styled from 'styled-components';

export const RelatedLink = () => {
  return (
    <UnOrderedList>
      <List>
        <Link href="https://github.com/Yuta07" target="_blank">
          <Img src="/links/github-icon.svg" alt="github" />
        </Link>
      </List>
      <List>
        <Link href="https://pigmon.io" target="_blank">
          <Img src="/links/pigmon.svg" alt="blog" />
        </Link>
      </List>
      <List>
        <Link href="https://twitter.com/yutazon7" target="_blank">
          <Img src="/links/twitter.svg" alt="twitter" />
        </Link>
      </List>
    </UnOrderedList>
  );
};

const UnOrderedList = styled.ul`
  display: flex;
  list-style: none;
`;

const List = styled.li`
  margin: 0 25px;
`;

const Link = styled.a`
  &:hover {
    transition: 0.3s;
    opacity: 0.7;
  }
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;
