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

  @media (max-width: 575.98px) {
    margin-top: 30px;
  }
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    transition: 0.3s;
    color: #3fb0ac;
  }
`;

const Txt = styled.span`
  margin-top: 10px;

  @media (max-width: 575.98px) {
    font-size: 14px;
    margin-top: 8px;
  }
`;
