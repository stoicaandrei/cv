import produce from 'immer';
import { Fragment } from 'react';
import { IconDisplay, InvisibleInput } from 'components';
import { ContactInfoItem } from 'types';

type Props = {
  items: ContactInfoItem[];
  onUpdate: (data: ContactInfoItem[]) => void;
};

const ContactInfo = ({ items, onUpdate }: Props) => {
  const updateItem = (data: Partial<ContactInfoItem>, index: number) => {
    onUpdate?.(
      produce(items, (draft) => {
        draft[index] = { ...draft[index], ...data };
      })
    );
  };

  return (
    <div className="grid grid-cols-[min-content,1fr] gap-y-1 gap-x-2 ">
      {items.map((item, index) => {
        return (
          <Fragment key={index}>
            <IconDisplay
              icon={item.icon}
              className="self-center justify-self-center"
            />
            <InvisibleInput
              value={item.text}
              onChange={(text) => updateItem({ text }, index)}
            />
            {/* {item.url && (
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.text}
              </a>
            )}
            {!item.url && item.text} */}
          </Fragment>
        );
      })}
    </div>
  );
};

export default ContactInfo;
