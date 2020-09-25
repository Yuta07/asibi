import { FC } from 'react';

type Props = {
  ordered: boolean;
  tight: boolean;
  index: number;
};

export const ListItem: FC<Props> = ({ ordered, tight, children }) => {
  return (
    <li>
      {children}
      <style jsx>{`
        li {
          padding: 5px 0;
          position: relative;

          ${ordered && tight && `padding-left: 35px;`}
        }

        li:before {
          ${
            ordered &&
            tight &&
            `
            display: inline-block;
            position: absolute;
            left: 0px;
            top: 5px;
            width: 1.5rem;
            height: 1.5rem;
            color: #ffffff;
            font-weight: 550;
            font-size: 14px;
            text-align: center;
            line-height: 25px;
            content: counter(number);
            counter-increment: number 1;
            border-radius: 50%;
            background: #3fb0ac;
            `
          }
      `}</style>
    </li>
  );
};
