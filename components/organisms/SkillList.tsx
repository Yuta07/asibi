import { Skill } from './Skill';
import skillData from '../../content/skill.json';

export const SkillList = () => {
  return (
    <div className="skill-wrapper">
      <h2 className="skill-hero">Skills</h2>
      <div className="skill-container">
        {skillData.data.map((data) => {
          return <Skill key={data.name} data={data} />;
        })}
      </div>
      <style jsx>{`
        .skill-wrapper {
          width: 100%;
          margin-top: 150px;
        }

        .skill-hero {
          font-size: 48px;
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
          text-align: center;
        }

        .skill-container {
          width: 100%;
          margin-top: 50px;
          display: grid;
          grid-template-rows: 165px;
          grid-template-columns: 165px 165px 165px 165px;
          grid-row-gap: 20px;
          grid-column-gap: 20px;
        }

        @media (max-width: 575.98px) {
          .skill-hero {
            font-size: 40px;
          }

          .skill-container {
            grid-template-rows: auto;
            grid-template-columns: 45% 45%;
            grid-column-gap: 10%;
          }
        }
      `}</style>
    </div>
  );
};
