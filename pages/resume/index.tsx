import styled from 'styled-components';
import { Personal } from '../../components/atoms/Personal';
import { SkillList } from '../../components/organisms/SkillList';
import { ExperienceList } from '../../components/organisms/ExperienceList';

export default function Resume() {
  return (
    <Container>
      <Content>
        <Personal />
        <SkillList />
        <ExperienceList />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;
