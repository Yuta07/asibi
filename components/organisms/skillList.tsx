import React from 'react';
import styled from 'styled-components';
import { Skill } from './skill';

export const SkillList = () => {
  return (
    <UnOrderedList>
      <List>
        <Skill language="React + Redux" image="/skills/react.svg" level={3} />
      </List>
      <List>
        <Skill language="TypeScript" image="/skills/typescript-icon.svg" level={2} />
      </List>
      <List>
        <Skill language="Firebase" image="/skills/firebase.svg" level={2} />
      </List>
      <List>
        <Skill language="Ruby on Rails" image="/skills/rails.svg" level={1} />
      </List>
    </UnOrderedList>
  );
};

const UnOrderedList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const List = styled.li`
  width: 50%;
  margin: 0 0 50px auto;

  @media (max-width: 425px) {
    width: 75%;
    margin: 20px auto;
  }
`;
