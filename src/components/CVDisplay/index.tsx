import produce from 'immer';
import BodyItem from './BodyItem';
import ExtendedExperience from './ExtendedExperience';
import Page from './Page';
import Profile from './Profile';
import SidebarItem from './SidebarItem';
import { CVData, SidebarItem as SidebarItemType, WorkExperience } from 'types';

type Props = {
  data: CVData;
  short?: boolean;
  editable?: boolean;
  onUpdate?: (data: CVData) => void;
};

const CVDisplay = ({ data, short, editable, onUpdate }: Props) => {
  const experience = data.body.find(
    (item) => item.title === 'work experience'
  ) as WorkExperience;

  const partialUpdate = (newData: Partial<CVData>) =>
    onUpdate?.({ ...data, ...newData });

  const updateSidebarItem = (newData: SidebarItemType, index: number) => {
    onUpdate?.(
      produce(data, (draft) => {
        draft.sidebar[index] = newData;
      })
    );
  };

  return (
    <div>
      <Page
        sidebar={
          <>
            <Profile
              photoUrl={data.photoUrl}
              name={data.name}
              title={data.title}
              onUpdate={partialUpdate}
              editable={editable}
            />
            {data.sidebar.map((item, index) => (
              <SidebarItem
                key={item.title}
                item={item}
                onUpdate={(data) => updateSidebarItem(data, index)}
                editable={editable}
              />
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
