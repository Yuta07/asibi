import styled from 'styled-components';
import { ContactInfo } from '../../components/atoms/ContactInfo';
import { RelatedLink } from '../../components/atoms/RelatedLink';

export default function ContactPage() {
  return (
    <Container>
      <Grid>
        <Title>Contact</Title>
        <ContactInfo />
        <RelatedLink />
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  max-width: 760px;
  margin: 100px auto 0;
  padding: 0 20px;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 5%;
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 1;
`;
