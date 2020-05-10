import React from 'react';
import styled from 'styled-components';

export type Props = {
  color: string;
  fill: string;
};

export const Star = ({ color, fill }: Props) => {
  return (
    <Span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={fill}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </Span>
  );
};

const Span = styled.span`
  padding: 0 2px;
`;
