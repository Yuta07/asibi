import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

export const Header = () => {
  const router = useRouter();

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
            <ListAnchor path={router.pathname === '/about'}>ABOUT</ListAnchor>
          </Link>
        </List>
        <List>
          <Link href="/skill">
            <ListAnchor path={router.pathname === '/skill'}>SKILL</ListAnchor>
          </Link>
        </List>
        <List>
          <Link href="/contact">
            <ListAnchor path={router.pathname === '/contact'}>CONTACT</ListAnchor>
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

  @media (max-width: 960px) {
    width: 700px;
  }

  @media (max-width: 425px) {
    width: 360px;
  }

  @media (max-width: 374px) {
    width: 300px;
  }
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
  margin: 0 8px;
`;

const ListAnchor = styled.a<{ path: boolean }>`
  ${({ path }) => {
    return css`
      padding: 18px 8px 8px;
      display: inline-block;
      cursor: pointer;
      position: relative;
      color: ${path ? '#01a3a4' : null};
      cursor: ${path ? 'default' : 'pointer'};

      &:hover {
        transition: 0.3s;
        color: ${path ? null : '#7f8c8d'};

        ${path
          ? null
          : `&:before {
          transform: scale3d(1, 1, 1);
          transform-origin: 0% 50%;
        }`};
      }

      &:before {
        content: '';
        color: #01a3a4;
        position: absolute;
        top: calc(50% - -21px);
        left: 0;
        width: 100%;
        height: 2px;
        pointer-events: none;
        background: currentColor;
        transform: scale3d(0, 1, 1);
        transform-origin: 100% 50%;
        transition: transform 0.3s;
        transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);

        ${path
          ? `
            transform: scale3d(1, 1, 1);
            transform-origin: 0% 50%;
          `
          : null};
      }

      @media (max-width: 425px) {
        padding: 20px 0 8px;
      }
    `;
  }}
`;
