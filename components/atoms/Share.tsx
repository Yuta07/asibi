export const Share = () => {
  return (
    <>
      <h3 className="share-text">SHARE</h3>
      <amp-social-share
        className="rounded"
        aria-label="Share on Twitter"
        type="twitter"
        width="40"
        height="40"
      ></amp-social-share>
      <a href="/" className="blog-author-area">
        <h3 className="blog-author-name">author: Yutaka Miyazaki</h3>
      </a>
      <style jsx>{`
        .share-text {
          font-size: 24px;
          color: #696969;
        }

        amp-social-share {
          margin-top: 20px;
        }

        amp-social-share:focus {
          outline: none;
        }

        amp-social-share.rounded {
          border-radius: 50%;
          background-size: 60%;
          color: #efefef;
          box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
            6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
        }

        amp-social-share.rounded:hover {
          transition: 0.3s ease-in-out;
          box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
            2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .blog-author-area {
          position: absolute;
          top: 75%;
          right: 20px;
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
          cursor: pointer;
        }

        .blog-author-area:hover {
          transition: 0.3s;
          color: #3fb0ac;
        }

        blog-author-name {
        }

        @media (max-width: 575.98px) {
          .blog-author-area {
            top: 100%;
            left: 0;
            right: 0;
            margin-top: 30px;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};
