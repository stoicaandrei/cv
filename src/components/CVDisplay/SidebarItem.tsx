import Awards from './Awards';
import ContactInfo from './ContactInfo';
import Languages from './Languages';
import OpenSource from './OpenSource';
import Skills from './Skills';
import RawHtml from 'components/RawHtml';
import { InvisibleInput } from 'components/ui';
import type { SidebarItem as SidebarItemType } from 'types';

type Props = {
  item: SidebarItemType;
  update: (data: SidebarItemType) => void;
};

type ContentProps = {
  item: SidebarItemType;
  update: (data: Partial<SidebarItemType>) => void;
};

const Content = ({ item }: ContentProps) => {
  if ('content' in item) return <RawHtml html={item.content} />;

  switch (item.title) {
    case 'contact':
      return <ContactInfo items={item.items} />;
    case 'skills':
      return <Skills items={item.items} />;
    case 'languages':
      return <Languages items={item.items} />;
    case 'open source':
      return <OpenSource items={item.items} />;
    case 'awards':
      return <Awards items={item.items} />;
  }
};

const SidebarItem = ({ item, update }: Props) => {
  return (
    <div>
      <InvisibleInput
        className="pb-1 text-base font-semibold uppercase text-white"
        value={item.title}
        onChange={(title) => update({ ...item, title })}
      />
      <Content item={item} update={(data) => update({ ...item, ...data })} />
    </div>
  );
};

export default SidebarItem;
