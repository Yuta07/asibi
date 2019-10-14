import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
// import components
import Layout from '../components/Layout';
// import atom
import Spinner from '../atom/Spinner';
import Title from '../atom/Title';
// import data
import { WorkData } from '../data/work';
// import style
import * as Style from '../styles/style';

const Works = () => {
  const router = useRouter();
  const path = router.pathname;

  const renderWorks = WorkData.map((work, index) => {
    return (
      <EveryWorkWrapper key={index}>
        <WorkImgWrapper>
          <LazyLoad height="100%" placeholder={<Spinner margin="60" />} debounce={500}>
            <WorkImg src={work.img} alt={work.title} />
          </LazyLoad>
        </WorkImgWrapper>
        <WorkDescriptionWrapper>
          {work.link === '' ? (
            <Link href={path}>
              <WorkName>{work.title}</WorkName>
            </Link>
          ) : (
            <WorkLink href={work.link}>
              <WorkName>{work.title}</WorkName>
            </WorkLink>
          )}
          <WorkDescription>{work.description}</WorkDescription>
          <WorkPeriod>{work.period}</WorkPeriod>
        </WorkDescriptionWrapper>
      </EveryWorkWrapper>
    );
  });

  return (
    <Layout>
      <Style.CorePageWrapper>
        <Style.PageTitleContainer>
          <Title title="Works" />
        </Style.PageTitleContainer>
        <WorksWrapper>{renderWorks}</WorksWrapper>
      </Style.CorePageWrapper>
    </Layout>
  );
};

// works style
const WorksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const EveryWorkWrapper = styled.div`
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 10px 20px 35px -15px rgba(0, 0, 0, 0.3);
  margin-top: 2.5rem;

  &:first-child {
    margin-top: 0;
  }
`;

const WorkImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #04111d;
  border-radius: 8px 8px 0 0;
`;

const WorkImg = styled.img`
  width: 75%;
  max-height: 160px;
  object-fit: cover;
`;

const WorkDescriptionWrapper = styled.div`
  padding: 1rem;
`;

const WorkLink = styled.a``;

const WorkName = styled.h2`
  color: #323335;
  font-size: 1.2rem;
  font-weight: 550;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: #e68123;
    transition: 0.3s;
  }
`;

const WorkDescription = styled.p`
  margin: 6px 0;
  font-size: 0.95rem;
`;

const WorkPeriod = styled.p`
  font-size: 0.9rem;
  color: #828486;
`;

export default Works;
