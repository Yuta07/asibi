import styled from 'styled-components';
import { Copyright } from '../components/atoms/Copyright';
import { Greeting } from '../components/atoms/Greeting';
import { Logo } from '../components/atoms/Logo';
import { Card } from '../components/organisms/Card';
import homeData from '../content/home.json';

export default function Home() {
  return (
    <Content>
      <IntroContainer>
        <Introduction>
          <Top>
            <Logo />
          </Top>
          <Greeting />
          <Copyright />
        </Introduction>
      </IntroContainer>
      {homeData.data.map((data) => {
        return <Card key={data.title} data={data} />;
      })}
    </Content>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-rows: 50vh 50vh;
  grid-template-columns: 50vw 50vw;
  grid-template-area: 'intro resume' 'portfolio blog';

  @media (max-width: 575.98px) {
    grid-template-rows: 100vw;
    grid-template-columns: 100vw;
    grid-template-area: 'intro' 'resume' 'portfolio' 'blog';
  }
`;

const IntroContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;

  @media (max-width: 575.98px) {
    grid-row: 1;
    grid-column: 1;
  }
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 10px;
  height: 100%;
  position: relative;
`;

const Top = styled.div`
  position: absolute;
  top: 40px;
  left: 10px;
`;
