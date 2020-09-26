import worksData from '../../content/works.json';

export const Works = () => {
  return (
    <div className="works-wrapper">
      <h2 className="works-hero">Works</h2>
      <div className="works-inner">
        {worksData.data.map((data) => {
          const { image, title, description, period, slug } = data;

          return (
            <a key={title} href={`/works/${slug}`} className="works-link">
              <div className="works-image-container">
                <amp-img src={image[0]} layout="intrinsic" width="350" height="200" alt={`${title}-image`}></amp-img>
              </div>
              <div className="works-caveat">
                <p className="works-period">{period}</p>
                <h3 className="works-title">{title}</h3>
                <p className="works-description">{description}</p>
              </div>
            </a>
          );
        })}
      </div>
      <style jsx>{`
        .works-wrapper {
          width: 100%;
          margin-top: 150px;
        }

        .works-hero {
          font-size: 48px;
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
          text-align: center;
        }

        .works-inner {
          width: 100%;
          margin-top: 50px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .works-link {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: calc(50% - 10px);
          background: #efefef;
          box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
            6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
          border-radius: 30px;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          -webkit-transition: 0.3s ease-in-out;
        }

        .works-link:hover {
          box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
            2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .works-link:hover amp-img {
          box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
            6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
        }

        .works-link:nth-child(n + 3) {
          margin-top: 20px;
        }

        amp-img {
          margin: 0 auto;
          width: 100%;
          background: #efefef;
          box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
            2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 30px;
          transition: 0.3s ease-in-out;
          -webkit-transition: 0.3s ease-in-out;
        }

        .works-caveat {
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .works-period {
          font-size: 14px;
          font-weight: 350;
        }

        .works-title {
          font-size: 22px;
          margin-top: 5px;
        }

        .works-description {
          font-size: 14px;
          font-weight: 350;
          margin-top: 5px;
        }

        @media (max-width: 575.98px) {
          .works-hero {
            font-size: 40px;
          }

          amp-img {
            width: 100%;
          }

          .works-link {
            width: 100%;
          }

          .works-link:nth-child(n + 1) {
            margin-top: 30px;
          }
        }
      `}</style>
    </div>
  );
};
