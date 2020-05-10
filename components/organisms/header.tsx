import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Anchor>
          <Logo />
        </Anchor>
      </Link>
      <UnOrderedList>
        <List>
          <Link href="/about">
            <Span>About</Span>
          </Link>
        </List>
        <List>
          <Link href="/skills">
            <Span>Skills</Span>
          </Link>
        </List>
      </UnOrderedList>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UnOrderedList = styled.ul`
  list-style: none;
  display: flex;
  font-size: 18px;
`;

const List = styled.li`
  margin: 0 5px;
`;

const Span = styled.span`
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;

const Anchor = styled.a`
  cursor: pointer;
`;