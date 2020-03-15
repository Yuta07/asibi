import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
// import atom
import Title from '../atom/Title';
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
    <Fragment>
      <Style.CorePageWrapper>
        <Style.PageTitleContainer>
          <Title title="Biography" />
        </Style.PageTitleContainer>
        <CoreBioWrapper>
          <Bio>生年月日：1992/03/09(28歳)</Bio>
          <Bio>出身地：愛知県</Bio>
          <BioHero border={true}>現在のお仕事</BioHero>
          <BioText>
            2019年新卒として入社した東京の某社にてSaaSの開発をしています。
            仕事ではSQLを扱うことが多く、主に導入企業ごとのカスタマイズの開発・設定変更を行ったり、ドキュメントの整備をしています。
            カスタマイズ開発では規模の大きいサービスのASPで構成されたレガシーなコードやサービス内の大部分を占めるSQLの改修を行っています。
            副業先では主にReact / TypeScriptを用いた開発を行っています。主にWeb管理画面の開発に携わっています。
          </BioText>
          <BioHero border={true}>これからについて</BioHero>
          <BioText>
            現在はフロントエンドに力を入れていますが、この先はバックエンド・インフラと広くチャレンジしていきたいです。
            何かしら１つを極めたスペシャリストには憧れますが、残念ながら自分より才能がある人は多くいるので、複数の強みを持つ手札の多い人間を目指しています。
            最近は自分の英語力の衰えを実感し、エンジニアとしてやっていけるように英語の勉強をしています。
            toC向けのサービスよりtoB向けのサービスをより好みます。特にSaaSサービスのような社会の仕組みを変える可能性を持ったサービスを好んでいます。
            もちろんtoC向けのサービス開発も好きです。
            いつか地元の愛知にUターンして何かしらの形で貢献したいと思っています。
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
    </Fragment>
  );
};

// me style
// bio
const CoreBioWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const Bio = styled.p`
  font-size: 14px;
  letter-spacing: 0.5px;
`;

const BioHero = styled.h3<{ border: boolean }>`
  ${({ border }) => {
    return css`
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: ${border ? '1px solid #e68123' : null};
    `;
  }}
`;

const BioText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 0.5rem;
`;

// experience
const CoreExperienceWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
`;

const ExperienceWrapper = styled.div`
  width: 75%;
  margin-right: 1.5rem;
  padding: 1rem 0.5rem;
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
  width: 120px;
  height: 48px;
  margin: 1.2rem auto 0;
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
  margin-top: 2.5rem;
  padding: 0.5rem;
  font-size: 1.1rem;
  color: #fefefe;
  background-color: #323335;
  border-radius: 8px;
  text-align: center;
`;

export default Resume;
