import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <CoreHeaderWrapper>
    <HeaderTitleWrapper>
      <HeaderWrapper>
        <AppTitle>Yutazon.me</AppTitle>
      </HeaderWrapper>
    </HeaderTitleWrapper>
    <AppBioGraphy>
      <BiographyWrapper>
        <BioImage src="/static/bio.png" alt="bio-img" />
        <BioDiscription>
          <ExternalLink href="https://github.com/Yuta07">Yutaka Miyazaki.</ExternalLink>
          <EasyProfile>Web Developer 🎉</EasyProfile>
          <EasyProfile>東京でSaaSの開発をしているよ</EasyProfile>
        </BioDiscription>
      </BiographyWrapper>
    </AppBioGraphy>
  </CoreHeaderWrapper>
);

// Header style
const CoreHeaderWrapper = styled.header`
  width: 100%;
`;

const HeaderTitleWrapper = styled.div`
  width: 100%;
  background-color: #282a31;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 1.4rem;
`;

const AppTitle = styled.h1`
  color: #fefefe;
  font-size: 1.7rem;
`;

const AppBioGraphy = styled.aside`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

const BiographyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.6rem;
  padding: 0 1.4rem;
`;

const BioImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 1.5rem;
  border-radius: 50%;
  object-fit: contain;
`;

const BioDiscription = styled.div`
  max-width: 320px;
`;

const ExternalLink = styled.a`
  color: #e68123;
  text-decoration: underline;
  margin-right: 6px;

  &:hover {
    text-decoration: none;
  }
`;

const EasyProfile = styled.p`
  font-size: 1rem;
  line-height: 1.8;
`;

export default Header;
