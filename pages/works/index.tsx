import styled from 'styled-components';
import worksData from '../../content/works.json';
import { WorksCard } from '../../components/organisms/WorksCard';

export default function WorksPage() {
  return (
    <Content>
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
  margin: 0 auto;
  padding: 0 20px;
`;

const Grid = styled.div`
  width: 100%;
  margin-top: 100px;
  display: grid;
  grid-template-rows: 200px;
  grid-template-columns: 220px 220px 220px;
  grid-row-gap: 30px;
  grid-column-gap: 30px;

  @media (max-width: 575.98px) {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
