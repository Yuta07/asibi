import React from 'react';
import styled from 'styled-components';

export const Avatar = () => {
  return (
    <ImgField>
      <Img src="/root/animoji_me.png" alt="animoji_me" />
    </ImgField>
  );
};

const ImgField = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border: solid 5px #ffffff;
  border-radius: 50%;
  background: #f3e367;
  object-fit: contain;
`;
