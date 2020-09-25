type Props = {
  data: {
    name: string;
    image: string;
    level: number;
    color: string;
  };
};

export const Skill = ({ data }: Props) => {
  const { name, image, level, color } = data;

  return (
    <div className="skill-card">
      <div className="skill-flame">
        <div className="skill-image-wrapper">
          <amp-img src={image} fallback="" width="35" height="35" layout="intrinsic" alt="skill-image"></amp-img>
        </div>
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            id="circle-dasharray"
            stroke={color}
            strokeDasharray={`${level} 100`}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </div>
      <h3 className="skill-name">{name}</h3>
      <style jsx>{`
        .skill-card {
          width: 100%;
          height: 100%;
          background: #efefef;
          box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
            6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
          border-radius: 30px;
          padding-top: 20px;
        }

        .skill-flame {
          width: 90px;
          height: 90px;
          margin: 0 auto;
          position: relative;
        }

        .skill-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        amp-img {
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
        }

        // svg borrows from here
        // ref: https://codepen.io/sergiopedercini/pen/jmKdbj

        .circular-chart {
          display: block;
          margin: 0 auto;
          max-width: 100%;
          max-height: 100%;
        }

        .circle-bg {
          fill: none;
          stroke: #dbdbdb;
          stroke-width: 3.8;
        }

        .circle {
          fill: none;
          stroke: ${color};
          stroke-width: 2.8;
          stroke-linecap: round;
          animation: progress 1s ease-out forwards;
        }

        .skill-name {
          font-weight: 550;
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
          text-align: center;
          padding: 15px 0 10px;
        }

        @media (max-width: 575.98px) {
          .skill-flame {
            width: 70px;
            height: 70px;
          }

          .skill-name {
            font-size: 14px;
            padding: 10px 0 10px;
          }
        }

        @keyframes progress {
          0% {
            stroke-dasharray: 0 100;
          }
        }
      `}</style>
    </div>
  );
};
