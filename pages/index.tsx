import React from 'react';
import styled from 'styled-components';
// import components
import Layout from '../components/Layout';
import Title from '../components/Title';
// import data
import { ExperienceData } from '../data/experience';
import { LinkData } from '../data/links';
// import style
import * as Style from '../styles/style';

const Resume = () => {
  // experience render
  const renderExperience = ExperienceData.map((exp, index) => {
    return (
      <ExperienceWrapper key={index}>
        <ExperiencePeriod>{exp.period}</ExperiencePeriod>
        <ExperienceRole>{exp.role}</ExperienceRole>
        <ExperienceDescription>{exp.description}</ExperienceDescription>
      </ExperienceWrapper>
    );
  });

  // link render
  const renderLink = LinkData.map((link, index) => {
    return (
      <LinkWrapper key={index}>
        <LinkImg src={link.img} alt={link.name} />
        <ExternalLink href={link.link}>
          <LinkRedirect>{link.name}</LinkRedirect>
        </ExternalLink>
      </LinkWrapper>
    );
  });

  return (
    <Layout>
      <Style.CorePageWrapper>
        <Style.PageTitleContainer>
          <Title title="Biography" />
        </Style.PageTitleContainer>
        <CoreBioWrapper>
          <BioText>
            東京で活動しており、SaaS開発企業で働いています。
            業務ではSQLを扱うことが多いですが、個人・副業先では主にReact / Reduxを用いた開発を行っています。
            <br />
            フロントだけではなく、サーバサイド・インフラと広く携わっていきたいと考えています。
            プログラミング言語は特にこだわっていませんが、Reactが好きです。
            <br />
            閉鎖的な空間よりもオープンな空間を好みます。また、ツールもある程度自由に使える環境だと嬉しいです。
            toCよりかはtoBのサービスを好みます。toC向けのサービス開発も好きですが、ゲームや広告系は避けています。
            <br />
            エンジニアとしてコードを書く中で、世の中を少しでもよくしていけたらと思います。
          </BioText>
        </CoreBioWrapper>
      </Style.CorePageWrapper>
      <Style.CorePageWrapper>
        <Style.PageTitleContainer>
          <Title title="Experience" />
        </Style.PageTitleContainer>
        <CoreExperienceWrapper>{renderExperience}</CoreExperienceWrapper>
      </Style.CorePageWrapper>
      <Style.CorePageWrapper>
        <Style.PageTitleContainer>
          <Title title="Links" />
        </Style.PageTitleContainer>
        <CoreLinkWrapper>{renderLink}</CoreLinkWrapper>
        <EmailText>yutazon.me@gmail.com</EmailText>
      </Style.CorePageWrapper>
    </Layout>
  );
};

// me style
// bio
const CoreBioWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const BioText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

// experience
const CoreExperienceWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin-top: 2rem;
`;

const ExperienceWrapper = styled.div`
  width: 75%;
  margin-right: 1rem;
  padding: 0.5rem;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

const ExperiencePeriod = styled.p`
  font-size: 0.9rem;
  color: #828486;
`;

const ExperienceRole = styled.h3`
  font-size: 1.1rem;
  margin: 0.5rem 0;
  white-space: nowrap;
`;

const ExperienceDescription = styled.p`
  font-size: 0.95rem;
  white-space: normal;
`;

//link
const CoreLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.8rem;
`;

const LinkWrapper = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 1.2rem;
  padding: 6px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkImg = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 1rem;
`;

const ExternalLink = styled.a`
  text-decoration: none;
`;

const LinkRedirect = styled.span`
  font-size: 1rem;
  color: #828486;

  &:hover {
    color: #e68123;
    transition: 0.3s;
  }
`;

const EmailText = styled.p`
  margin-top: 1.5rem;
  padding: 0.5rem;
  font-size: 1.1rem;
  color: #fefefe;
  background-color: #323335;
  border-radius: 8px;
  text-align: center;
`;

export default Resume;
