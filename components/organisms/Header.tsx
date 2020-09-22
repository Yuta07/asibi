import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Logo } from '../atoms/Logo';

export const Header = () => {
  const router = useRouter();

  return (
    <Outer>
      <style jsx>{`
        a.header-anchor {
          padding: 12px 5px 8px;
          display: inline-block;
          cursor: pointer;
          position: relative;
        }

        a.header-anchor:hover {
          transition: 0.3s;
          color: #3fb0ac;
        }

        a.header-anchor:hover:before {
          transform: scale3d(1, 1, 1);
          transform-origin: 0% 50%;
        }

        a.header-anchor:before {
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
        }

        a.current-link {
          color: #3fb0ac;
          cursor: default;
        }

        a.current-link:before {
          transform: scale3d(1, 1, 1);
          transform-origin: 0% 50%;
        }

        @media (max-width: 575.98px) {
          a.header-anchor {
            font-size: 12px;
            padding: 8px 2px 4px;
          }

          a.header-anchor:before {
            top: calc(50% - -15px);
          }
        }
      `}</style>
      <Content>
        <Logo />
        <Nav>
          <List>
            <Link href="/resume" as="/resume">
              <a className={`header-anchor ${router.pathname === '/resume' && 'current-link'}`}>Resume</a>
            </Link>
          </List>
          <List>
            <Link href="/works" as="/works">
              <a className={`header-anchor ${router.pathname === '/works' && 'current-link'}`}>Works</a>
            </Link>
          </List>
          <List>
            <Link href="/blog" as="/blog">
              <a className={`header-anchor ${router.pathname === '/blog' && 'current-link'}`}>Blog</a>
            </Link>
          </List>
        </Nav>
      </Content>
    </Outer>
  );
};

const Outer = styled.header`
  width: 100%;
`;

const Content = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.ul`
  display: flex;
  height: 40px;
  padding-left: 0;
  margin: 0;
  font-size: 12px;
  font-weight: 550;
  list-style: none;
`;

const List = styled.li`
  margin: 0 8px;

  @media (max-width: 575.98px) {
    margin: 0 5px;
  }
`;
