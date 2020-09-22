import styled from 'styled-components';
import { Skill } from './Skill';
import skillData from '../../content/skill.json';

export const SkillList = () => {
  return (
    <Container>
      <Title>Skills</Title>
      <Content>
        {skillData.data.map((data) => {
          return <Skill key={data.name} data={data} />;
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
  display: grid;
  grid-template-rows: 165px;
  grid-template-columns: 165px 165px 165px 165px;
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  @media (max-width: 575.98px) {
    grid-template-rows: auto;
    grid-template-columns: 45% 45%;
    grid-column-gap: 10%;
  }
`;
