import { FC } from 'react';

export const InlineCode: FC = ({ children }) => {
  return (
    <code>
      {children}
      <style jsx>{`
        code {
          background: #efefef;
          padding: 2px 8px;
          border-radius: 8px;
        }
      `}</style>
    </code>
  );
};
