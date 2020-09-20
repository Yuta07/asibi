import React from 'react';
import styled from 'styled-components';
import { Avatar } from './Avatar';

export const Personal = () => {
  return (
    <AboutField>
      <Avatar />
      <Name>Yutaka Miyazaki</Name>
      <Position>Engineer</Position>
      <Txt>フロントエンドエンジニア🎉 主にReact/Next.jsを触っています。Reactでの2年以上のWebアプリ開発の経験あり。</Txt>
      <Social>
        <Link href="https://github.com/Yuta07" target="_blank">
          <Img src="/links/github-icon.svg" alt="github" />
        </Link>
        <Link href="https://twitter.com/yutazon7" target="_blank">
          <Img src="/links/twitter.svg" alt="twitter" />
        </Link>
      </Social>
      <SingleWord>Fish🐡 rathar than meat🍖</SingleWord>
    </AboutField>
  );
};

const AboutField = styled.div`
  width: 480px;
  margin: 0 auto;
`;

const Name = styled.h2`
  font-size: 22px;
  text-align: center;
  margin-top: 10px;
`;

const Position = styled.span`
  color: #838386;
  margin: 10px 0;
  display: block;
  text-align: center;
`;

const Txt = styled.p`
  font-size: 14px;
`;

const Social = styled.div`
  width: 100%;
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a``;

const Img = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;

const SingleWord = styled.p`
  font-size: 14px;
  color: #838386;
  text-align: center;
  margin-top: 10px;
`;
