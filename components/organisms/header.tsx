import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export const Header = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Anchor>
          <Img src="/logo.svg" alt="logo" />
        </Anchor>
      </Link>
      <UnOrderedList>
        <List>
          <Link href="/about">
            <ListAnchor>ABOUT</ListAnchor>
          </Link>
        </List>
        <List>
          <Link href="/skill">
            <ListAnchor>SKILL</ListAnchor>
          </Link>
        </List>
        <List>
          <Link href="/contact">
            <ListAnchor>CONTACT</ListAnchor>
          </Link>
        </List>
      </UnOrderedList>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 940px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Anchor = styled.a`
  cursor: pointer;
  display: inline-flex;
`;

const Img = styled.img`
  width: 28px;
  height: 28px;
`;

const UnOrderedList = styled.ul`
  list-style: none;
  display: flex;
  font-size: 12px;
  font-weight: 550;
  padding-left: 0;
  margin: 0;
`;

const List = styled.li`
  margin: 0 5px;
`;

const ListAnchor = styled.a`
  padding: 20px 8px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;
