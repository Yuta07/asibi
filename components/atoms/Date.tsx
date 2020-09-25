export const Date = ({ dateString }: { dateString: string }) => {
  return (
    <small>
      <time dateTime={dateString}>{dateString}</time>
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
