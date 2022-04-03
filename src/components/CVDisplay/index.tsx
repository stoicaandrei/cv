import BodyItem from './BodyItem';
import Profile from './Profile';
import SidebarItem from './SidebarItem';
import { CVData } from 'types';

type Props = {
  data: CVData;
  short?: boolean;
};

const CVDisplay = ({ data, short }: Props) => {
  return (
    <div>
      <div className="flex h-[29.7cm] w-[21cm] flex-row text-xs">
        <div className="flex basis-1/3 flex-col justify-start gap-6 bg-gray-700 p-5 align-middle text-gray-300">
          <Profile
            photoUrl={data.photoUrl}
            name={data.name}
            title={data.title}
          />
          {data.sidebar.map((item) => (
            <SidebarItem key={item.title} item={item} />
          ))}
        </div>
        <div className="basis-2/3 bg-white p-5 pr-10">
          <div className="flex h-full flex-col gap-5 overflow-hidden">
            {data.body.map((item) => (
              <BodyItem key={item.title} item={item} short={short} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDisplay;
