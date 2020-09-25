export const ScrollToTopButton = () => {
  return (
    <div className="scroll-button">
      <button on="tap:pageTopElement.scrollTo(duration=1000)" className="smooth-scroll-button">
        <amp-img
          src="/scroll-top.svg"
          fallback=""
          width="48"
          height="48"
          layout="intrinsic"
          alt="scroll-to-top"
        ></amp-img>
      </button>
      <style jsx>{`
        .scroll-button {
          width: 100%;
          margin-top: 150px;
          text-align: center;
        }

        .smooth-scroll-button {
          padding: 15px;
          display: inline-flex;
          box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
            6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s ease-in-out;
        }

        .smooth-scroll-button:focus {
          outline: none;
        }

        .smooth-scroll-button:hover {
          box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
            2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        amp-image {
          width: 48px;
          height: 48px;
        }
      `}</style>
    </div>
  );
};
