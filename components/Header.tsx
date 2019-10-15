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
        <BioImage src="/bio.png" alt="bio-img" />
        <BioDiscription>
          <ExternalLink href="https://github.com/Yuta07">Yutaka Miyazaki.</ExternalLink>
          <EasyProfile>Web Developer 🎉</EasyProfile>
          <EasyProfile>SaaSの開発をしたり、Web管理画面の開発をしています。</EasyProfile>
        </BioDiscription>
      </BiographyWrapper>
    </AppBioGraphy>
  </CoreHeaderWrapper>
);

// Header style
const CoreHeaderWrapper = styled.header`
  width: 100%;
  background-color: #fefefe;
`;

const HeaderTitleWrapper = styled.div`
  width: 100%;
  background-color: #282a31;
  padding: 0.7rem 0;
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
  margin: 1.8rem 0 0;
  padding: 0 1.4rem 1rem;
`;

const BioImage = styled.img`
  width: 64px;
  max-height: 64px;
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
  font-size: 0.9rem;
  line-height: 1.6;
`;

export default Header;
