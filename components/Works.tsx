import styled from 'styled-components';
import worksData from '../content/works.json';
import { WorksCard } from './organisms/WorksCard';

export const Works = () => {
  return (
    <Content>
      <Title>Works</Title>
      <Grid>
        {worksData.data.map((data) => {
          return <WorksCard key={data.title} data={data} />;
        })}
      </Grid>
    </Content>
  );
};

const Content = styled.div`
  max-width: 900px;
  margin: 30px auto 0;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 240px;
  grid-template-columns: 280px 280px 280px;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  width: 900px;
  margin-top: 30px;
`;
