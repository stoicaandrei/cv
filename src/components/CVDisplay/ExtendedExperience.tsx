import Experience from './Experience';
import Page from './Page';
import { ExperienceItem } from 'types';

type Props = {
  items: ExperienceItem[];
};

const ExtendedExperience = ({ items }: Props) => {
  const chunks: ExperienceItem[][] = [];
  for (let i = 0; i < items.length; i += 3) {
    chunks.push(items.slice(i, i + 3));
  }

  return (
    <>
      {chunks.map((experience, index) => (
        <Page key={index} body={<Experience items={experience} />} />
      ))}
    </>
  );
};

export default ExtendedExperience;
