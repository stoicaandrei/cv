import { NextPage } from 'next';
import { CVDisplay } from 'components';
import cvDataExtended from 'data/cvDataExtended';

const CVPage: NextPage = () => {
  return <CVDisplay data={cvDataExtended} />;
};

export default CVPage;
