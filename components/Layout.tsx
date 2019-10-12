import React, { ReactNode } from 'react';
// import dynamic from 'next/dynamic';
import styled from 'styled-components';
// import components
import Header from './Header';
import AppNav from './AppNav';

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <CoreLayoutWrapper>
      <Header />
      <AppNav />
      <LayoutWrapper>
        <CoreContentsWrapper>{props.children}</CoreContentsWrapper>
      </LayoutWrapper>
    </CoreLayoutWrapper>
  );
};

const CoreLayoutWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 2rem;

  @media (min-width: 560px) {
    background-color: #f7f6ed;
  }
`;

const LayoutWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

const CoreContentsWrapper = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  min-height: calc(100vh - 20rem);
  padding: 1rem 1.4rem 2rem;

  @media (max-width: 559px) {
    background-color: #f7f6ed;
  }
`;

export default Layout;
