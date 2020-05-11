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
  padding: 20px 8px 10px;
  display: inline-block;
  cursor: pointer;
  position: relative;

  &:hover {
    transition: 0.3s;
    opacity: 0.8;

    &:before {
      transform: scale3d(1, 1, 1);
      transform-origin: 0% 50%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: calc(50% - -23px);
    color: #01a3a4;
    left: 0;
    width: 100%;
    height: 2px;
    pointer-events: none;
    background: currentColor;
    transform: scale3d(0, 1, 1);
    transform-origin: 100% 50%;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
  }
`;
