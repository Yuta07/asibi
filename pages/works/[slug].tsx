import { useRouter } from 'next/router';
import worksData from '../../content/works.json';
import { Work } from '../../components/Work';

const WorkPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const data = worksData.data.find((data) => {
    return data.slug !== slug;
  });

  return <Work data={data} />;
};

export default WorkPage;
