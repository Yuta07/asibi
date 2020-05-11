import React from 'react';
import styled from 'styled-components';

export const CoverImg = () => {
  return (
    <Wrapper>
      <Background />
      <Container>
        <AvatarWrapper>
          <Img src="/avatar.svg" alt="avatar" />
        </AvatarWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 240px;
  background: url(/profile.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: -35px auto 0;
`;

const AvatarWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: solid 1px #ffffff;
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: solid 2px #ffffff;
`;
