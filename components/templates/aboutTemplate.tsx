import React from 'react';
import styled from 'styled-components';
import { Heading } from '../atoms/heading';
import { CoverImg } from '../atoms/coverImg';

export const AboutTemplate = () => {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <CoverImg />
        </ImageContainer>
        <MeContainer>
          <Heading text="ABOUT" />
          <Introduce>wev developer</Introduce>
        </MeContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  height: 100%;
  margin: 20px 0;
`;

const Container = styled.div`
  max-width: 780px;
  margin: 50px auto 0;
`;

const ImageContainer = styled.div``;

const MeContainer = styled.div``;

const Introduce = styled.div``;
