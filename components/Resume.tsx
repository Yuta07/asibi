import styled from 'styled-components';
import { Personal } from './atoms/Personal';
import { SkillList } from './organisms/SkillList';
import { ExperienceList } from './organisms/ExperienceList';

export const Resume = () => {
  return (
    <Container>
      <Content>
        <Personal />
        <SkillList />
        <ExperienceList />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Content = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
