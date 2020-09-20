import React from 'react';
import styled from 'styled-components';

export const RelatedLink = () => {
  return (
    <UnOrderedList>
      <List>
        <Link href="https://github.com/Yuta07" target="_blank">
          <Img src="/links/github-icon.svg" alt="github" />
          <Txt>Github</Txt>
        </Link>
      </List>
      <List>
        <Link href="https://twitter.com/yutazon7" target="_blank">
          <Img src="/links/twitter.svg" alt="twitter" />
          <Txt>Twitter</Txt>
        </Link>
      </List>
      <List>
        <Link href="https://www.wantedly.com/users/92241527" target="_blank">
          <Img src="/links/wantedly_mark.svg" alt="twitter" />
          <Txt>Wantedly</Txt>
        </Link>
      </List>
    </UnOrderedList>
  );
};

const UnOrderedList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const List = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;

  &:hover {
    transition: 0.3s;
    color: #3fb0ac;
  }
`;

const Img = styled.img`
  width: 28px;
  height: 28px;
`;

const Txt = styled.span`
  padding-left: 15px;
  font-weight: 500;
`;
