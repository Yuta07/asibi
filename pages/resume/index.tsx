import styled from 'styled-components';
import { Personal } from '../../components/atoms/Personal';
import { Contact } from '../../components/molecules/Contact';
import { SkillList } from '../../components/organisms/SkillList';
import { ExperienceList } from '../../components/organisms/ExperienceList';

export default function Resume() {
  return (
    <Container>
      <Content>
        <Personal />
        <SkillList />
        <ExperienceList />
        <Contact />
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
  margin: 100px 0;

  @media (max-width: 575.98px) {
    margin: 60px 0 100px;
  }
`;
