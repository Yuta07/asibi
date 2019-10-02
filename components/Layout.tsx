import React, { ReactNode } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
// import components
const DynamicHeaderWithCustomLoading = dynamic(() => import('./Header'), { loading: () => <p>...</p> });

const CoreLayoutWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

const LayoutWrapper = styled.div`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1.4rem;
`;

const LinkStyle = styled.span``;

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <CoreLayoutWrapper>
      <DynamicHeaderWithCustomLoading />
      <LayoutWrapper>
        <Link href="/me">
          <LinkStyle>Bio</LinkStyle>
        </Link>
        <Link href="/product">
          <LinkStyle>Product</LinkStyle>
        </Link>
        <Link href="/link">
          <LinkStyle>Link</LinkStyle>
        </Link>
        {props.children}
      </LayoutWrapper>
    </CoreLayoutWrapper>
  );
};

export default Layout;
