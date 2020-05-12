import React from 'react';
import styled from 'styled-components';
import { Star } from './star';

export type Props = {
  level: number;
};

export const Stars = ({ level }: Props) => {
  let nonStarCount = 5 - level;

  const renderFillStarIcon = (count: number) => {
    let items = [];
    for (let i = 0; i < count; i++) {
      items.push(<Star key={i} fill="#e68123" color="#e68123" />);
    }
    return items;
  };

  const renderNonStarIcon = (count: number) => {
    let items = [];
    for (let i = 0; i < count; i++) {
      items.push(<Star key={i} fill="none" color="#e68123" />);
    }
    return items;
  };

  return (
    <SkillWrapper>
      {renderFillStarIcon(level)}
      {renderNonStarIcon(nonStarCount)}
    </SkillWrapper>
  );
};

// skill style
const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;
