import React from 'react';
import styled from 'styled-components';
import { Stars } from '../atoms/stars';

type Props = {
  language: string;
  image: string;
  level: number;
};

export const Skill = ({ language, image, level }: Props) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Img src={image} alt={language} />
      </ImageContainer>
      <SkillContainer>
        <Text>{language}</Text>
        <Stars level={level} />
      </SkillContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  margin-right: 20px;

  @media (max-width: 425px) {
    margin-right: 30px;
  }
`;

const Img = styled.img`
  width: 64px;
  height: 64px;

  @media (max-width: 960px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 425px) {
    width: 40px;
    height: 40px;
  }
`;

const SkillContainer = styled.div``;

const Text = styled.h3`
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
