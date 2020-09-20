import styled from 'styled-components';

export const Avatar = () => {
  return (
    <ImgField>
      <Img src="/root/animoji_me.png" alt="animoji_me" />
    </ImgField>
  );
};

const ImgField = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  padding: 10px;
  border: solid 5px #ffffff;
  border-radius: 50%;
  background: #3fb0ac;
  object-fit: contain;
`;
