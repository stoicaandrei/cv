import Experience from './Experience';
import RawHtml from 'components/RawHtml';
import type { BodyItem as BodyItemType } from 'types';

type Props = {
  item: BodyItemType;
  short?: boolean;
};

const renderContent = (item: BodyItemType) => {
  if ('content' in item) return <RawHtml html={item.content} />;

  switch (item.title) {
    case 'about me':
      return (
        <RawHtml
          html={item.introduction}
          className="flex flex-col gap-3 text-justify"
        />
      );
    case 'work experience':
      return <Experience items={item.items} />;
    case 'most relevant work experience':
      return (
        <Experience items={item.items.filter((item) => item.mostRelevant)} />
      );
  }
};

const BodyItem = ({ item, short }: Props) => {
  item = { ...item };
  if (short && item.title === 'work experience') {
    item.title = 'most relevant work experience';
  }

  return (
    <div>
      <h2 className="pb-3 text-base font-semibold uppercase">{item.title}</h2>
      {renderContent(item)}
    </div>
  );
};

export default BodyItem;
