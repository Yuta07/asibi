import React from 'react';
import styled from 'styled-components';
// import types
import { TitleProps } from '../../types/type';

const title = (props: TitleProps) => {
  return (
    <>
      <Title>{props.title}</Title>
    </>
  );
};

const Title = styled.h1`
  font-size: 1.5rem;
  display: inline-block;
  padding-bottom: 6px;
  border-bottom: 1px solid #e68123;
`;

export default title;
