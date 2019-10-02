import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <AppLayoutHead>
    <CoreHeaderWrapper>
      <AppTitle>Yutazon.me</AppTitle>
    </CoreHeaderWrapper>
    <AppBioGraphy>
      <BiographyWrapper>
        <BioImage src="" alt="bio-img" />
        <BioDiscription>Web Developer. Mainly React, TypeScript.</BioDiscription>
      </BiographyWrapper>
    </AppBioGraphy>
  </AppLayoutHead>
);

// Header style
const AppLayoutHead = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1.4rem;
`;

const CoreHeaderWrapper = styled.div`
  margin-bottom: 2rem;
`;

const AppTitle = styled.h1`
  color: #323740;
  font-size: 1.7rem;
`;

const AppBioGraphy = styled.aside`
  width: 100%;
`;

const BiographyWrapper = styled.div``;

const BioImage = styled.img``;

const BioDiscription = styled.p``;

export default Header;
