import BodyItem from './BodyItem';
import Page from './Page';
import Profile from './Profile';
import SidebarItem from './SidebarItem';
import { CVData } from 'types';

type Props = {
  data: CVData;
  short?: boolean;
};

const CVDisplay = ({ data, short }: Props) => {
  return (
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
  );
};

export default CVDisplay;
