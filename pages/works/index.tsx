import styled from 'styled-components';
import worksData from '../../content/works.json';
import { WorksCard } from '../../components/organisms/WorksCard';

export default function WorksPage() {
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
}

const Content = styled.div`
  max-width: 760px;
  margin: 30px auto 0;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
`;

const Grid = styled.div`
  width: 100%;
  margin-top: 30px;
  display: grid;
  grid-template-rows: 200px;
  grid-template-columns: 220px 220px 220px;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
`;
