import styled from 'styled-components';

export const ContactInfo = () => {
  return (
    <Content>
      <Link href="mailto:mono.12dev@gmail.com" target="_blank">
        mono.12dev@gmail.com
      </Link>
      <Txt>Birth: 1992/03/09</Txt>
      <Txt>Kawasaki City</Txt>
      <Txt>Japan</Txt>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    transition: 0.3s;
    color: #3fb0ac;
  }
`;

const Txt = styled.span`
  margin-top: 10px;
`;
