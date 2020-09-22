import styled from 'styled-components';
import { Experience } from './Experience';
import experienceData from '../../content/experience.json';

export const ExperienceList = () => {
  return (
    <Container>
      <Title>Job Experience</Title>
      <Content>
        {experienceData.data.map((data) => {
          return <Experience key={data.devPeriod} data={data} />;
        })}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .experience-card {
    &:nth-child(2n - 1) {
      margin-right: 20px;
    }

    &:nth-child(n + 3) {
      margin-top: 20px;
    }
  }

  @media (max-width: 575.98px) {
    flex-direction: column;
    flex-wrap: nowrap;

    .experience-card {
      &:first-child {
        margin-top: 0;
      }

      &:nth-child(2n - 1) {
        margin-right: 0;
      }

      &:nth-child(n + 3) {
        margin-top: 30px;
      }
    }
  }
`;
