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
  onUpdate: (data: SidebarItemType) => void;
};

type ContentProps = {
  item: SidebarItemType;
  onUpdate: (data: Partial<SidebarItemType>) => void;
};

const Content = ({ item, onUpdate }: ContentProps) => {
  if ('content' in item) return <RawHtml html={item.content} />;

  switch (item.title) {
    case 'contact':
      return (
        <ContactInfo
          items={item.items}
          onUpdate={(items) => onUpdate({ items })}
        />
      );
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

const SidebarItem = ({ item, onUpdate }: Props) => {
  return (
    <div>
      <InvisibleInput
        className="pb-1 text-base font-semibold uppercase text-white"
        value={item.title}
      />
      <Content
        item={item}
        onUpdate={(data) => onUpdate({ ...item, ...data } as any)}
      />
    </div>
  );
};

export default SidebarItem;
