import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

type SpinnerProps = {
  margin: string;
};

const Spinner = (props: SpinnerProps) => {
  return (
    <Fragment>
      <Loading margin={props.margin} />
    </Fragment>
  );
};

// spinner loading
const Spin = keyframes`
0% {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
100% {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
`;

const Loading = styled.div<{ margin: string }>`
  font-size: 8px;
  margin: ${props => props.margin}px auto;
  text-indent: -9999em;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #e68123;
  background: -moz-linear-gradient(left, #e68123 10%, rgba(255, 212, 81, 0) 42%);
  background: -webkit-linear-gradient(left, #e68123 10%, rgba(255, 212, 81, 0) 42%);
  background: -o-linear-gradient(left, #e68123 10%, rgba(255, 212, 81, 0) 42%);
  background: -ms-linear-gradient(left, #e68123 10%, rgba(255, 212, 81, 0) 42%);
  background: linear-gradient(to right, #e68123 10%, rgba(255, 212, 81, 0) 42%);
  position: relative;
  -webkit-animation: ${Spin} 0.8s infinite linear;
  animation: ${Spin} 0.8s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: #fefefe;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: #fefefe;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export default Spinner;
