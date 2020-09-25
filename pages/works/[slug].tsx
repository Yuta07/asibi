import { useRouter } from 'next/router';
import styled from 'styled-components';
import worksData from '../../content/works.json';

export default function WorkPage() {
  const router = useRouter();
  const { slug } = router.query;

  const data = worksData.data.find((data) => {
    return data.slug === slug;
  });

  if (data === undefined) return null;

  const { image, title, overview, language, period, ref } = data;

  return (
    <Content>
      {image.map((img, index) => {
        return <Img key={index} src={img} alt={`${title}-image-${index}`} />;
      })}
      <Note>
        <Small>{period}</Small>
        <Title>{title}</Title>
        <Txt>{overview}</Txt>
        {language.map((lang, index) => {
          return (
            <Small key={lang}>
              {lang}
              {index + 1 !== language.length && ` / `}
            </Small>
          );
        })}
        <Link href={ref} target="_blank">
          <RefImg src="/links/github.svg" alt="github" />
          Source Code
        </Link>
      </Note>
    </Content>
  );
}

const Content = styled.div`
  max-width: 380px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;
  height: 280px;
  margin: 0 auto;
  object-fit: cover;
  background: #efefef;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
    6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
  border-radius: 30px;

  &:not(:first-child) {
    margin-top: 30px;
  }
`;

const Note = styled.div`
  margin-top: 30px;
`;

const Small = styled.small`
  font-size: 14px;
`;

const Title = styled.h2`
  margin-top: 5px;
  font-size: 20px;
`;

const Txt = styled.p`
  margin: 10px 0;
  color: #838386;
  font-size: 14px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: #838386;
  font-size: 14px;

  &:hover {
    transition: 0.3s;
    color: #3fb0ac;
  }
`;

const RefImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
