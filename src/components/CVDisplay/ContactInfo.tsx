import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { ContactInfoItem } from 'types';

type Props = {
  items: ContactInfoItem[];
};

const ContactInfo = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-[min-content,1fr] gap-y-1 gap-x-2 ">
      {items.map((item) => {
        const icon = item.icon.split(' ') as unknown as [IconPrefix, IconName];

        return (
          <Fragment key={item.text}>
            <FontAwesomeIcon
              icon={icon}
              className="self-center justify-self-center"
            />
            {item.url && (
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.text}
              </a>
            )}
            {!item.url && item.text}
          </Fragment>
        );
      })}
    </div>
  );
};

export default ContactInfo;
