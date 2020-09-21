import styled from 'styled-components';
import { parseISO, format } from 'date-fns';

export const Date = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  return (
    <Small>
      <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    </Small>
  );
};

const Small = styled.small`
  font-size: 12.5px;
  color: #7f8c8d;
`;
