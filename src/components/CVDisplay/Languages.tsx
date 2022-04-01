import { Fragment } from 'react';
import { LanguageItem } from 'types';

type Props = {
  items: LanguageItem[];
};

const Languages = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-[1fr,min-content]">
      {items.map((item) => (
        <Fragment key={item.name}>
          <span>{item.name}</span>
          <span>{item.level}</span>
        </Fragment>
      ))}
    </div>
  );
};

export default Languages;
