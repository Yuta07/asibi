import React, { ReactNode } from 'react';
// import dynamic from 'next/dynamic';
import styled from 'styled-components';
// import components
// const DynamicHeaderWithCustomLoading = dynamic(() => import('./Header'), { loading: () => <p>...</p> });
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
`;

const LayoutWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

const CoreContentsWrapper = styled.div`
  margin-top: 2.5rem;
  padding: 0 1.4rem;
`;

export default Layout;
