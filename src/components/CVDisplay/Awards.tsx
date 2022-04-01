import { Fragment } from 'react';
import { AwardItem } from 'types';

type Props = {
  items: AwardItem[];
};

const Awards = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-[1fr,min-content]">
      {items.map((item) => (
        <Fragment key={item.competition}>
          <span>{item.name}</span>
          <span className="whitespace-nowrap">{item.competition}</span>
        </Fragment>
      ))}
    </div>
  );
};

export default Awards;
