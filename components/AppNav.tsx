import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const AppNav = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <AppNavCoreWrapper>
      <AppNavLinkWrapper>
        <Link href="/">
          <AppNavLink route={path === '/'}>
            <AppNavLinkImage src="/static/nav/moon.svg" alt="my bio" route={path === '/'} />
            <AppNavLinkText>Bio</AppNavLinkText>
          </AppNavLink>
        </Link>
        <Link href="/works" as="works">
          <AppNavLink route={path === '/works'}>
            <AppNavLinkImage src="/static/nav/layout.svg" alt="my works" route={path === '/works'} />
            <AppNavLinkText>Works</AppNavLinkText>
          </AppNavLink>
        </Link>
        <Link href="/links" as="links">
          <AppNavLink route={path === '/links'}>
            <AppNavLinkImage src="/static/nav/share.svg" alt="link" route={path === '/links'} />
            <AppNavLinkText>Links</AppNavLinkText>
          </AppNavLink>
        </Link>
      </AppNavLinkWrapper>
    </AppNavCoreWrapper>
  );
};

// AppNav style
const AppNavCoreWrapper = styled.nav`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 1.4rem;
  color: #fefefe;
  border-top: 1px solid #e0e7ef;
  border-bottom: 1px solid #e0e7ef;

  @media (max-width: 559px) {
    padding: 0;
  }
`;

const AppNavLinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const AppNavLink = styled.button<{ route: boolean }>`
  color: ${props => (props.route ? '#e68123' : '#c9cfd3')};
  background-color: #fefefe;
  position: relative;
  width: 30%;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  outline: 0;
  border: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom: ${props => (props.route ? '3px solid #e68123' : '3px solid transparent')};

  &:hover {
    border-bottom: 3px solid #e68123;
  }

  @media (max-width: 559px) {
    width: 33%;
  }
`;

const AppNavLinkImage = styled.img<{ route: boolean }>`
  width: 32px;
  height: 32px;
  opacity: ${props => (props.route ? '1' : '0.4')};
  filter: ${props => (props.route ? 'none' : 'saturate(10%)')};
`;

const AppNavLinkText = styled.p`
  padding-top: 0.4rem;
  font-size: 0.9rem;
`;

export default AppNav;
// animation: ${props => (props.route ? `${NavAnimation} 0.5s linear 0s 1 normal none running` : null)};
