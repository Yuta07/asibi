import { FC } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Header } from './organisms/Header';

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  const ROOT_PATH = router.pathname === '/';

  return ROOT_PATH ? (
    <RootWrapper>{children}</RootWrapper>
  ) : (
    <>
      <Header />
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
};

const RootWrapper = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 30px 0 100px;
`;

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;
`;
