import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { Logo } from '../atoms/Logo';

export const Header = () => {
  const router = useRouter();

  return (
    <HeaderOuter>
      <Content>
        <Logo />
        <Nav>
          <List>
            <Link href="/resume">
              <Anchor path={router.pathname === '/resume'}>Resume</Anchor>
            </Link>
          </List>
          <List>
            <Link href="/portfolio">
              <Anchor path={router.pathname === '/portfolio'}>Portfolio</Anchor>
            </Link>
          </List>
          <List>
            <Link href="/blog">
              <Anchor path={router.pathname === '/blog'}>Blog</Anchor>
            </Link>
          </List>
          <List>
            <Link href="/contact">
              <Anchor path={router.pathname === '/contact'}>Contact</Anchor>
            </Link>
          </List>
        </Nav>
      </Content>
    </HeaderOuter>
  );
};

const HeaderOuter = styled.header`
  width: 100%;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 0;
  font-size: 12px;
  font-weight: 550;
  list-style: none;
`;

const List = styled.li`
  margin: 0 8px;
`;

const Anchor = styled.a<{ path: boolean }>`
  ${({ path }) => {
    return css`
      padding: 18px 5px 8px;
      display: inline-block;
      cursor: pointer;
      position: relative;
      color: ${path ? '#3fb0ac' : null};
      cursor: ${path ? 'default' : 'pointer'};

      &:hover {
        transition: 0.3s;
        color: ${path ? null : '#3fb0ac'};
        ${path
          ? null
          : `&:before {
            transform: scale3d(1, 1, 1);
            transform-origin: 0% 50%;
          }`};
      }

      &:before {
        content: '';
        color: #3fb0ac;
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
    `;
  }}
`;
