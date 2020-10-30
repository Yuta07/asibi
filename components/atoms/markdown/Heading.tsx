import { FC, createElement } from 'react';

export const Heading: FC<{ level: number }> = ({ level = 2, children }) => {
  const Tag: any = `h${level}`;

  return createElement(
    'div',
    null,
    <Tag>
      {children}
      <style jsx>{`
        h1 {
          font-size: 22px;
        }

        h2 {
          font-size: 20px;
        }

        h3 {
          font-size: 18px;
        }

        h4,
        h5 {
          font-size: 16px;
        }

        h2,
        h3,
        h4,
        h5 {
          margin: 50px 0 15px;
          padding-left: 15px;
          position: relative;
        }

        h2:before,
        h3:before,
        h4:before,
        h5:before {
          position: absolute;
          top: 0px;
          left: 0px;
          content: '';
          display: inline-block;
          width: 4px;
          height: 100%;
          border-radius: 6px;
          background: #3fb0ac;
        }
      `}</style>
    </Tag>
  );
};
