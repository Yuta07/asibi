import Link from 'next/link';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <Link href="/">
      <a href="/">
        <Img src="/logo.svg" alt="logo" />
      </a>
    </Link>
  );
};

const Img = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
