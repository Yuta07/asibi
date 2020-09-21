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
  margin-top: 60px;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 30px;
  display: grid;
  grid-template-rows: 165px;
  grid-template-columns: 165px 165px 165px 165px;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;
