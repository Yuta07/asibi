import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
// import components
import Layout from '../components/Layout';
import Title from '../components/Title';
import Star from '../components/StarIcon';
// import data
import { SkillData } from '../data/skill';

let initialHoverState: boolean[] = [];
for (let i = 0; i < SkillData.length; i++) {
  initialHoverState.push(false);
}

const Skills = () => {
  const [hoverDescription, setHoverDescription] = useState(initialHoverState);

  const handleClickDescriptionShow = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>, index: number): void => {
      event.preventDefault();
      let trgetObject = hoverDescription[index];
      let copyObject = Object.assign([], hoverDescription, initialHoverState);
      setHoverDescription(Object.assign([], copyObject, { [index]: !trgetObject }));
    },
    [hoverDescription]
  );

  // skill render
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

  const renderSkill = SkillData.map((skill, index) => {
    let starCount = 4 - skill.star;
    return (
      <EverySkillWrapper key={index} onClick={event => handleClickDescriptionShow(event, index)}>
        <SkillImgWrapper>
          <SkillImg src={skill.img} alt={skill.language} />
          <SkillLevel>
            {renderFillStarIcon(skill.star)}
            {renderNonStarIcon(starCount)}
          </SkillLevel>
        </SkillImgWrapper>
        <SkillDescriptionWrapper>
          <SkillName>{skill.language}</SkillName>
        </SkillDescriptionWrapper>
        <SkillDescription show={hoverDescription[index]}>{skill.description}</SkillDescription>
      </EverySkillWrapper>
    );
  });

  return (
    <Layout>
      <CoreSkillWrapper>
        <SkillTitleContainer>
          <Title title="Skils" />
        </SkillTitleContainer>
        <SkillWrapper>{renderSkill}</SkillWrapper>
      </CoreSkillWrapper>
    </Layout>
  );
};

// skill style
const CoreSkillWrapper = styled.section`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e7ef;

  &:first-child {
    padding-top: 0;
    border-top: none;
  }
`;

const SkillTitleContainer = styled.div`
  text-align: center;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  position: relative;
  z-index: 3000;
`;

const EverySkillWrapper = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-top: 1.2rem;
  border: 1px solid #e0e7ef;
  border-radius: 8px;
  background-color: #fefefe;
`;

const SkillImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillImg = styled.img`
  width: 50px;
  height: 50px;
`;

const SkillLevel = styled.div`
  width: 100%;
  margin-top: 1.2rem;
  text-align: center;
`;

const SkillDescriptionWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const SkillName = styled.p`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-top: 1px solid #e0e7ef;
`;

const SkillDescription = styled.p<{ show: boolean }>`
  position: absolute;
  z-index: 5000;
  top: 35%;
  width: 90%;
  font-size: 0.7rem;
  color: #fefefe;
  background-color: rgba(82, 81, 81, 0.8);
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? '1' : '0')};
`;

export default Skills;
