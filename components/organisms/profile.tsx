import React from 'react';
import styled from 'styled-components';
import Avatar from '../../assets/avatar.svg';

export const Profile = () => {
  return (
    <Wrapper>
      <Background />
      <Container>
        <AvatarWrapper>
          <Avatar />
        </AvatarWrapper>
        <Hero>Yutaka Miyazaki</Hero>
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

const Hero = styled.h1`
  margin-top: 10px;
  font-size: 1.5rem;
`;
