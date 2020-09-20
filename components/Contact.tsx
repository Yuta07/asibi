import React from 'react';
import styled from 'styled-components';
import { ContactInfo } from './atoms/ContactInfo';
import { RelatedLink } from './atoms/RelatedLink';

export const Contact = () => {
  return (
    <Grid>
      <Title>Contact</Title>
      <ContactInfo />
      <RelatedLink />
    </Grid>
  );
};

const Grid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 20px 0;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 33.3% 33.3% 33.3%;
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 1;
`;
