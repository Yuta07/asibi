import { Experience } from './Experience';
import experienceData from '../../content/experience.json';

export const ExperienceList = () => {
  return (
    <div className="experience-wrapper">
      <h2 className="experience-hero">Job Experience</h2>
      <div className="experience-container">
        {experienceData.data.map((data) => {
          return <Experience key={data.devPeriod} data={data} />;
        })}
      </div>
      <style jsx>{`
        .experience-wrapper {
          width: 100%;
          margin-top: 150px;
        }

        .experience-hero {
          font-size: 48px;
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
          text-align: center;
        }

        .experience-container {
          width: 100%;
          margin-top: 50px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        @media (max-width: 575.98px) {
          .experience-hero {
            font-size: 40px;
          }

          .experience-container {
            flex-direction: column;
            flex-wrap: nowrap;
          }
        }
      `}</style>
    </div>
  );
};
