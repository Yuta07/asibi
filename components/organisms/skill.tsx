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
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
`;

const SkillContainer = styled.div``;

const Text = styled.h3``;
