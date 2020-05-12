import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Experience } from './experience';
import { experiences } from '../../types';

export const ExperienceList = () => {
  const renderExList = experiences.map(experience => {
    return <Fragment key={experience.period}>{Experience(experience)}</Fragment>;
  });

  return (
    <Wrapper>
      <Container>{renderExList}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
