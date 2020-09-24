import styled from 'styled-components';
import { Personal } from '../../components/atoms/Personal';
import { Contact } from '../../components/molecules/Contact';
import { SkillList } from '../../components/organisms/SkillList';
import { ExperienceList } from '../../components/organisms/ExperienceList';

export default function Resume() {
  return (
    <Content>
      <Personal />
      <SkillList />
      <ExperienceList />
      <Contact />
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
