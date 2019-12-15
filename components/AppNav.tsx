import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAmp } from 'next/amp';
import styled from 'styled-components';

export const config = { amp: 'hybrid' };

const AppNav = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <AppNavCoreWrapper>
      {useAmp() ? (
        <div className="nav-image-wrapper">
          <a href="/" className="ampNavLink">
            <AppNavLink route={path === '/'} amp={useAmp()}>
              <amp-img src="/nav/file-text.svg" width="32" height="32" alt="resume">
                <noscript>
                  <img
                    src="/nav/file-text.svg"
                    width="32px"
                    height="32px"
                    className={path === '/' ? 'active-nav-image' : 'nav-image'}
                  />
                </noscript>
              </amp-img>
              <AppNavLinkText>Me</AppNavLinkText>
            </AppNavLink>
          </a>
          <a href="/skills" className="ampNavLink">
            <AppNavLink route={path === '/skills'} amp={useAmp()}>
              <amp-img src="/nav/moon.svg" width="32" height="32" alt="my skills">
                <noscript>
                  <img
                    src="/nav/moon.svg"
                    width="32px"
                    height="32px"
                    className={path === '/skills' ? 'active-nav-image' : 'nav-image'}
                  />
                </noscript>
              </amp-img>
              <AppNavLinkText>Skills</AppNavLinkText>
            </AppNavLink>
          </a>
          <a href="/works" className="ampNavLink">
            <AppNavLink route={path === '/works/works'} amp={useAmp()}>
              <amp-img src="/nav/layout.svg" width="32" height="32" alt="my skills">
                <noscript>
                  <img
                    src="/nav/layout.svg"
                    width="32px"
                    height="32px"
                    className={path === '/works/works' ? 'active-nav-image' : 'nav-image'}
                  />
                </noscript>
              </amp-img>
              <AppNavLinkText>Works</AppNavLinkText>
            </AppNavLink>
          </a>
        </div>
      ) : (
        <AppNavLinkWrapper>
          <Link href="/">
            <AppNavLink route={path === '/'} amp={useAmp()}>
              <AppNavLinkImage src="/nav/file-text.svg" alt="resume" route={path === '/'} />
              <AppNavLinkText>Me</AppNavLinkText>
            </AppNavLink>
          </Link>
          <Link href="/skills" as="skills">
            <AppNavLink route={path === '/skills'} amp={useAmp()}>
              <AppNavLinkImage src="/nav/moon.svg" alt="my skills" route={path === '/skills'} />
              <AppNavLinkText>Skills</AppNavLinkText>
            </AppNavLink>
          </Link>
          <Link href="/works" as="works">
            <AppNavLink route={path === '/works/works'} amp={useAmp()}>
              <AppNavLinkImage src="/nav/layout.svg" alt="my works" route={path === '/works'} />
              <AppNavLinkText>Works</AppNavLinkText>
            </AppNavLink>
          </Link>
        </AppNavLinkWrapper>
      )}
    </AppNavCoreWrapper>
  );
};

// AppNav style
const AppNavCoreWrapper = styled.nav`
  width: 100%;
  padding-bottom: 0.6rem;
  color: #fefefe;
  border-bottom: 1px solid #e0e7ef;
  background-color: #fefefe;
`;

const AppNavLinkWrapper = styled.div`
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const AppNavLink = styled.button<{ route: boolean; amp: boolean }>`
  color: ${props => (props.route ? '#e68123' : '#c9cfd3')};
  background-color: #fefefe;
  position: relative;
  width: ${props => (props.amp ? '100%' : '25%')};
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  border: none;
  outline: 0;
  appearance: none;
  cursor: pointer;
`;

const AppNavLinkImage = styled.img<{ route: boolean }>`
  width: 48px;
  height: 48px;
  padding: 8px;
  opacity: ${props => (props.route ? '1' : '0.4')};
  filter: ${props => (props.route ? 'none' : 'saturate(10%)')};
  border: ${props => (props.route ? '1px solid #e68123' : '1px solid #c9cfd3')};
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
`;

const AppNavLinkText = styled.p`
  padding-top: 0.4rem;
  font-size: 0.9rem;
`;

export default AppNav;
