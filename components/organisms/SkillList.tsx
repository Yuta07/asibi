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
  grid-template-rows: 190px;
  grid-template-columns: 190px 190px 190px 1fr;
  grid-row-gap: 33px;
  grid-column-gap: 33px;
`;
