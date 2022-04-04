import BodyItem from './BodyItem';
import ExtendedExperience from './ExtendedExperience';
import Page from './Page';
import Profile from './Profile';
import SidebarItem from './SidebarItem';
import { CVData, WorkExperience } from 'types';

type Props = {
  data: CVData;
  short?: boolean;
};

const CVDisplay = ({ data, short }: Props) => {
  const experience = data.body.find(
    (item) => item.title === 'work experience'
  ) as WorkExperience;

  return (
    <div>
      <Page
        sidebar={
          <>
            <Profile
              photoUrl={data.photoUrl}
              name={data.name}
              title={data.title}
            />
            {data.sidebar.map((item) => (
              <SidebarItem key={item.title} item={item} />
            ))}
          </>
        }
        body={
          <>
            {data.body.map((item) => (
              <BodyItem key={item.title} item={item} short={short} />
            ))}
          </>
        }
      />
      {!short && <ExtendedExperience items={experience.items.slice(3)} />}
    </div>
  );
};

export default CVDisplay;
