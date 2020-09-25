import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './organisms/Header';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 30px 0 100px;
`;

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;
`;
