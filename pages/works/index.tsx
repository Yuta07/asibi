import styled from 'styled-components';
import worksData from '../../content/works.json';
import { WorksCard } from '../../components/organisms/WorksCard';

export default function WorksPage() {
  return (
    <Grid>
      {worksData.data.map((data) => {
        return <WorksCard key={data.title} data={data} />;
      })}
    </Grid>
  );
}

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 200px;
  grid-template-columns: 220px 220px 220px;
  grid-row-gap: 30px;
  grid-column-gap: 30px;

  @media (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
