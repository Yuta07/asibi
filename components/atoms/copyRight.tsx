import styled from 'styled-components';

export const Copyright = () => {
  return (
    <CopyrightText>
      © {new Date().getFullYear()},
      <Link href="https://github.com/Yuta07" target="_blank">
        Yutaka Miyazaki
      </Link>
      All rights reserved.
    </CopyrightText>
  );
};

const CopyrightText = styled.p`
  font-size: 12px;
  color: #7f8c8d;
  letter-spacing: 0.5px;
  position: absolute;
  bottom: 20px;
`;

const Link = styled.a`
  margin: 0 6px;
  text-decoration: none;
  color: #7f8c8d;
  font-size: 12px;
  font-weight: 550;

  &:hover {
    transition: 0.2s;
    opacity: 0.8;
  }

  @media (max-width: 425px) {
    margin: 0 5px;
  }
`;
