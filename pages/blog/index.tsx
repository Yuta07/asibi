import { GetStaticProps } from 'next';
import { Date } from '../../components/atoms/Date';
import { getSortedPostsData } from '../../lib/posts';

type Props = {
  allPostsData: {
    excerpt: string;
    date: string;
    updated?: string;
    title: string;
    spoiler: string;
    image: string;
    id: string;
  }[];
};

export const config = { amp: true };

export default function Blog({ allPostsData }: Props) {
  return (
    <div className="blog-index-wrapper">
      {allPostsData.map((data) => (
        <a key={data.id} href={`/blog/${data.id}`} className="blog-index-anchor">
          <p className="blog-index-image-wrapper">
            <amp-img src={data.image} fallback="" width="55" height="55" layout="intrinsic" alt={data.title}></amp-img>
          </p>
          <div className="blog-index-description">
            <h3 className="blog-index-heading">{data.title}</h3>
            <div className="blog-index-date-img">
              <amp-img src="/blog/calendar.svg" fallback="" width="16" height="16" layout="intrinsic" alt="blog-created-img"></amp-img><Date dateString={data.date} />
              {data.updated && <><div className="blog-index-date-margin" /><amp-img src="/blog/refresh-cw.svg" fallback="" width="16" height="16" layout="intrinsic" alt="blog-created-img"></amp-img><Date dateString={data.updated} /></>}
            </div>
            <p className="blog-index-spoiler">{data.spoiler}</p>
          </div>
        </a>
      ))}
      <style jsx>{`
        .blog-index-wrapper {
          display: flex;
          flex-direction: column;
          color: #353b48;
        }

        .blog-index-anchor {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 20px 10px;
          background: #efefef;
          box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
            6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
          border-radius: 15px;
        }

        .blog-index-anchor:hover {
          transition: 0.3s;
          box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
            2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .blog-index-anchor:not(:first-child) {
          margin-top: 50px;
        }

        .blog-index-image-wrapper {
          height: 80px;
          width: 80px;
          margin: 0 30px 0 10px;
          background: #353942;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          filter: drop-shadow(0 4px 4px silver);
        }

        .blog-index-image-wrapper amp-img {
          width: 55px;
          height: 55px;
        }

        .blog-index-date-margin {
          margin-right: 30px;
        }

        .blog-index-description {
        }

        .blog-index-heading {
          cursor: pointer;
          font-size: 22px;
          font-weight: 700;
        }

        .blog-index-date-img {
          display: flex;
          align-items: center;
          margin-top: 5px;
        }

        .blog-index-date-img amp-img {
          width: 16px;
          height: 16px;
          margin-right: 10px;
        }

        .blog-index-spoiler {
          font-size: 14px;
          margin-top: 4px;
        }

        @media (max-width: 575.98px) {
          .blog-index-image-wrapper {
            height: 60px;
            width: 60px;
          }

          amp-img {
            height: 35px;
            width: 55px;
          }

          .blog-index-date-img {
            width: 140px;
            flex-wrap: wrap;
            align-items: flex-start
          }

          .blog-index-date-img amp-img {
            width: 16px;
            height: 16px;
          }

          .blog-index-anchor {
            font-size: 18px;
          }

          .blog-index-heading {
            font-size: 18px;
          }

          .blog-index-spoiler {
            font-szie: 12px;
          }
        }
      `}</style>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
