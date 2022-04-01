import { Fragment } from 'react';
import { SkillItem } from 'types';

type Props = {
  items: SkillItem[];
};

const Skills = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-[1fr,min-content]">
      {items.map((item) => (
        <Fragment key={item.name}>
          <span>{item.name}</span>
          <span className="whitespace-nowrap">
            {item.years} year{item.years > 1 ? 's' : ''}
          </span>
        </Fragment>
      ))}
    </div>
  );
};

export default Skills;
