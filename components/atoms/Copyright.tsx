export const Copyright = () => {
  return (
    <p className="copyright-text">
      © {new Date().getFullYear()},
      <a href="https://github.com/Yuta07" target="_blank" className="author-github-link">
        Yutaka Miyazaki
      </a>
      All rights reserved.
      <style jsx>
        {`
          .copyright-text {
            color: #efefef;
            font-size: 36px;
            letter-spacing: 0.5px;
            text-align: center;
            margin-top: 150px;
            padding: 50px 0;
            text-shadow: 2px 2px 4px rgba(239, 239, 239, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.2);
          }

          .author-github-link {
            color: #efefef;
            font-size: 28px;
            font-weight: 550;
            text-decoration: none;
            margin: 0 10px;
            transition: 0.3s ease-in-out;
          }

          .author-github-link:hover {
            text-shadow: 1px 1px 3px rgba(239, 239, 239, 0.45), -1px -1px 3px rgba(0, 0, 0, 0.15);
          }

          @media (max-width: 575.98px) {
            .copyright-text {
              font-size: 16px;
            }

            .author-github-link {
              font-size: 12.5px;
            }
          }
        `}
      </style>
    </p>
  );
};
