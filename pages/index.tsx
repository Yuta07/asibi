import React from 'react';
import styled from 'styled-components';
// import components
import Layout from '../components/Layout';
import Title from '../components/Title';
// import data
import { ExperienceData } from '../data/experience';

const Resume = () => {
  // experience render
  const renderExperience = ExperienceData.map((exp, index) => {
    return (
      <ExperienceWrapper key={index}>
        <ExperiencePeriod>{exp.period}</ExperiencePeriod>
        <ExperienceRole>{exp.role}</ExperienceRole>
        <ExperienceDescription>{exp.description}</ExperienceDescription>
      </ExperienceWrapper>
    );
  });

  return (
    <Layout>
      <CoreResumeWrapper>
        <ResumeTitleContainer>
          <Title title="Biography" />
        </ResumeTitleContainer>
      </CoreResumeWrapper>
      <CoreResumeWrapper>
        <ResumeTitleContainer>
          <Title title="Experience" />
        </ResumeTitleContainer>
        <CoreExperienceWrapper>{renderExperience}</CoreExperienceWrapper>
      </CoreResumeWrapper>
    </Layout>
  );
};

// resume style
const CoreResumeWrapper = styled.section`
  margin-top: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e7ef;

  &:first-child {
    padding-top: 0;
    border-top: none;
  }
`;

const ResumeTitleContainer = styled.div`
  text-align: center;
`;

// experience
const CoreExperienceWrapper = styled.section``;

const ExperienceWrapper = styled.div``;

const ExperiencePeriod = styled.p``;

const ExperienceRole = styled.h2``;

const ExperienceDescription = styled.p``;

export default Resume;
