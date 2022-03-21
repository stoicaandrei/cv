import { NextPage } from 'next';
import { CVDisplay } from 'components';
import cvData from 'data/cvData';

const CVPage: NextPage = () => {
  return <CVDisplay data={cvData} />;
};

export default CVPage;
