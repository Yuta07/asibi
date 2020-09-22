import { parseISO, format } from 'date-fns';

export const Date = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  return (
    <small>
      <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
      <style jsx>{`
        small {
          font-size: 12.5px;
          color: #7f8c8d;
        }

        @media (max-width: 575.98px) {
          small {
            font-size: 12px;
          }
        }
      `}</style>
    </small>
  );
};
