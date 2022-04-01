import Awards from './Awards';
import ContactInfo from './ContactInfo';
import Languages from './Languages';
import OpenSource from './OpenSource';
import Skills from './Skills';
import RawHtml from 'components/RawHtml';
import type { SidebarItem as SidebarItemType } from 'types';

type Props = {
  item: SidebarItemType;
};

const renderContent = (item: SidebarItemType) => {
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

const SidebarItem = ({ item }: Props) => {
  return (
    <div>
      <h2 className="pb-1 text-base font-semibold uppercase text-white">
        {item.title}
      </h2>
      {renderContent(item)}
    </div>
  );
};

export default SidebarItem;
