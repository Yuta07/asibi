import React from 'react';
import styled from 'styled-components';
// import components
import Layout from '../components/Layout';

const Title = styled.h1`
  font-size: 50px;
  color: skyblue;
`;

const Index = () => {
  return (
    <Layout>
      <Title>My page</Title>
      <ul>
        <li>asdf</li>
        <li>asdf</li>
        <li>asdf</li>
      </ul>
    </Layout>
  );
};

export default Index;
