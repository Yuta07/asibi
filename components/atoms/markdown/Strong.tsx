import { FC } from 'react';

export const Strong: FC = ({ children }) => {
  return (
    <strong>
      {children}
      <style jsx>{``}</style>
    </strong>
  );
};
