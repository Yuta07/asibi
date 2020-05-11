import React from 'react';
import styled from 'styled-components';

export const Avatar = () => {
  return <Img src="/avatar.svg" alt="avatar" />;
};

const Img = styled.img`
  width: 240px;
  border-radius: 50%;
  border: solid 2px #ffffff;
`;
