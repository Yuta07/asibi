import React from 'react';
import styled from 'styled-components';
import { Heading } from '../atoms/heading';

export const ContactTemplate = () => {
  return (
    <Wrapper>
      <Heading text="CONTACT" />
      <PhotoContainer>
        <Photo src="/yummy.png" alt="yummy" />
      </PhotoContainer>
      <MailContainer>
        <Text>
          Email:<Span>yutaka.12emp@gmail.com</Span>
        </Text>
      </MailContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 940px;
  height: calc(100vh - 240px);
  margin: 40px auto 90px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 960px) {
    width: 700px;
  }

  @media (max-width: 425px) {
    width: 90%;
    height: calc(100vh - 170px);
    margin: 30px auto;
    justify-content: flex-start;
  }
`;

const PhotoContainer = styled.div`
  margin-top: 80px;
`;

const Photo = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 425px) {
    width: 160px;
    height: 160px;
  }
`;

const MailContainer = styled.div`
  padding: 20px 0;
  margin-top: 20px;
`;

const Text = styled.p`
  font-size: 18px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const Span = styled.span`
  margin-left: 10px;
  color: #ff6b6b;
  user-select: all;
  cursor: pointer;
`;
