import React from 'react';
import styled, { css, keyframes } from 'styled-components';

type Props = {
  data: {
    name: string;
    image: string;
    level: number;
    color: string;
  };
};

export const Skill = ({ data }: Props) => {
  const { name, image, level, color } = data;

  return (
    <Card className="skill-card">
      <SkillFlame color={color}>
        <Image>
          <BackgeoundImg path={image} />
        </Image>
        <svg viewBox="0 0 36 36" className="circular-chart orange">
          <path
            className="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            stroke-dasharray={`${level} 100`}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </SkillFlame>
      <Name>{name}</Name>
    </Card>
  );
};

const Progress = keyframes`
  0% {
    stroke-dasharray: 0 100;
  }
`;

const Card = styled.div`
  width: 190px;
  height: 190px;
  background: #ffffff;
  padding-top: 20px;
  border-radius: 8px;
  filter: drop-shadow(0 4px 4px silver);
`;

const SkillFlame = styled.div<{ color: string }>`
  ${({ color }) => {
    return css`
      width: 110px;
      height: 110px;
      margin: 0 auto;
      position: relative;

      // svg borrows from here
      // ref: https://codepen.io/sergiopedercini/pen/jmKdbj

      .circular-chart {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        max-height: 100%;
      }

      .circle-bg {
        fill: none;
        stroke: #ececec;
        stroke-width: 3.8;
      }

      .circle {
        fill: none;
        stroke: ${color};
        stroke-width: 2.8;
        stroke-linecap: round;
        animation: ${Progress} 1s ease-out forwards;
      }
    `;
  }}
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BackgeoundImg = styled.div<{ path: string }>`
  ${({ path }) => {
    return css`
      background-image: url(${path});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      width: 50px;
      height: 50px;
      }
    `;
  }}
`;

const Name = styled.h3`
  font-weight: 550;
  text-align: center;
  margin-top: 15px;
  padding: 10px 10px 15px;
`;
