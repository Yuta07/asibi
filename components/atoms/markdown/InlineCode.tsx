import { FC } from 'react';

export const InlineCode: FC = ({ children }) => {
  return (
    <code>
      {children}
      <style jsx>{`
        code {
          background: #e7eef7;
          box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.6), -1px -1px 1px rgba(255, 255, 255, 0.4),
            1px 1px 1px rgba(255, 255, 255, 0.05), 1px 1px 2px rgba(0, 0, 0, 0.1);
          padding: 2px 8px;
          border-radius: 8px;
        }
      `}</style>
    </code>
  );
};
