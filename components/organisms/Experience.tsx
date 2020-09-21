import styled, { css } from 'styled-components';

type Props = {
  data: {
    role: string;
    overview: string;
    language: string;
    devPeriod: string;
    company: string;
    image: string;
  };
};

export const Experience = ({ data }: Props) => {
  const { role, overview, language, devPeriod, company, image } = data;

  const overviewArray = overview.split('・');
  const languageArray = language.split('・');

  return (
    <Card className="experience-card">
      <BackgeoundImg path={image} />
      <Small>{role}</Small>
      {overviewArray.map((overview) => {
        return <Strong key={overview}>{overview}</Strong>;
      })}
      <LangField>
        {languageArray.map((language) => {
          return <Lang key={language}>{language}</Lang>;
        })}
      </LangField>
      <Text>{devPeriod}</Text>
      <Span>{company}</Span>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  width: 350px;
  background: #ffffff;
  padding: 10px 15px;
  border-bottom: 2px solid #01a3a4;
  border-radius: 8px 8px 0 0;
  filter: drop-shadow(0 4px 4px silver);
`;

const BackgeoundImg = styled.div<{ path: string }>`
  ${({ path }) => {
    return css`
      background-image: url(${path});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      width: 80px;
      height: 80px;
      opacity: 0.4;
      position: absolute;
      bottom: 10px;
      right: 10px;
      }
    `;
  }}
`;

const Small = styled.small`
  color: #7f8c8d;
  font-weight: 550;
  font-size: 12px;
  display: block;
  margin: 5px 0 10px;
`;

const Strong = styled.h3`
  font-size: 14px;
`;

const LangField = styled.div`
  margin-top: 10px;
`;

const Lang = styled.span`
  color: #7f8c8d;
  font-size: 12px;
  margin-top: 2px;
  display: block;
`;

const Text = styled.p`
  margin: 15px 0 25px;
  font-size: 14px;
  font-weight: 300;

  @media (max-width: 425px) {
    margin: 15px 0;
  }
`;

const Span = styled.span`
  color: #7f8c8d;
  font-size: 12px;
  margin-top: 5px;
  display: block;
  position: absolute;
  bottom: 2px;
`;
