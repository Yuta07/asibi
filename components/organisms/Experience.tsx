type Props = {
  data: {
    role: string;
    overview: string;
    language: string;
    devPeriod: string;
    company: string;
    image: string;
  };
};

export const Experience = ({ data }: Props) => {
  const { role, overview, language, devPeriod, company, image } = data;

  const overviewArray = overview.split('・');
  const languageArray = language.split('・');

  return (
    <div className="experience-card">
      <amp-img src={image} fallback="" width="60" height="60" layout="intrinsic" alt={`${language}-image`}></amp-img>
      <small className="experience-role">{role}</small>
      {overviewArray.map((overview) => {
        return (
          <h3 key={overview} className="experience-overview">
            {overview}
          </h3>
        );
      })}
      <div className="experience-language-field">
        {languageArray.map((language) => {
          return (
            <span key={language} className="experience-language">
              {language}
            </span>
          );
        })}
      </div>
      <p className="experience-period">{devPeriod}</p>
      <span className="experience-company">{company}</span>
      <style jsx>{`
        .experience-card {
          position: relative;
          width: calc(50% - 10px);
          height: 220px
          padding: 20px;
          background: #efefef;
          box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
            6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
          padding-top: 20px;
          border-radius: 30px;
        }

        .experience-card:nth-child(2n - 1) {
          margin-right: 20px;
        }

        .experience-card:nth-child(n + 3) {
          margin-top: 20px;
        }

        amp-img {
          opacity: 0.4;
          position: absolute;
          bottom: 15px;
          right: 15px;
        }

        .experience-role {
          color: #7f8c8d;
          font-weight: 550;
          font-size: 12px;
          display: block;
          margin: 5px 0 10px;
        }

        .experience-overview {
          font-size: 14px;
        }

        .experience-language-field {
          margin-top: 10px;
        }

        .experience-language {
          color: #7f8c8d;
          font-size: 12px;
          margin-top: 2px;
          display: block;
        }

        .experience-period {
          margin: 15px 0 25px;
          font-size: 14px;
          font-weight: 300;
        }

        .experience-company {
          color: #7f8c8d;
          font-size: 12px;
          margin-top: 5px;
          display: block;
          position: absolute;
          bottom: 10px;
        }

        @media (max-width: 575.98px) {
          .experience-card {
            width: 100%;
            margin-top: 30px;
          }

          .experience-card:first-child {
            margin-top: 0;
          }

          .experience-card:nth-child(2n - 1) {
            margin-right: 0;
          }

          .experience-card:nth-child(n + 3) {
            margin-top: 30px;
          }
        }
      `}</style>
    </div>
  );
};
