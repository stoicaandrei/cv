import { Fragment } from 'react';
import { ContactInfoItem } from 'types';

type Props = {
  items: ContactInfoItem[];
};

const ContactInfo = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-[min-content,1fr] gap-y-1 gap-x-2">
      {items.map((item) => (
        <Fragment key={item.text}>
          <span>a</span>
          {item.url && (
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.text}
            </a>
          )}
          {!item.url && item.text}
        </Fragment>
      ))}
    </div>
  );
};

export default ContactInfo;
