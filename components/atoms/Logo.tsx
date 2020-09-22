import Link from 'next/link';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <Link href="/">
      <Title>yutazon.me</Title>
    </Link>
  );
};

const Title = styled.h1`
  font-size: 24px;
  color: #3fb0ac;
  cursor: pointer;

  @media (max-width: 575.98px) {
    font-size: 18px;
  }
`;
