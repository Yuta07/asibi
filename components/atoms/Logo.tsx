import styled from 'styled-components';

export const Logo = () => {
  return (
    <a href="/">
      <Title>yutazon.me</Title>
    </a>
  );
};

const Title = styled.h1`
  font-size: 24px;
  color: #3fb0ac;

  @media (max-width: 575.98px) {
    font-size: 18px;
  }
`;
