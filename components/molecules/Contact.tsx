import styled from 'styled-components';
import { ContactInfo } from '../atoms/ContactInfo';
import { RelatedLink } from '../atoms/RelatedLink';

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
  width: 100%;
  margin-top: 100px;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 5%;

  @media (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 1;
`;
